import { Router } from "express";
import Place from "./model.js";
import { JWTVerify } from "../../utils/jwt.js";
import { connectDb } from "../../config/db.js";
// import { __dirname } from "../../server.js";
import { sendToS3, downloadImage, uploadImage } from "./controller.js";
const router = Router();

router.get("/", async (req, res) => {
  connectDb();
  try {
    const placesDocs = await Place.find();
    res.json(placesDocs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar os lugares" });
  }
});

router.get("/owner", async (req, res) => {
  connectDb();
  try {
    const { _id } = await JWTVerify(req);

    try {
      const placesDocs = await Place.find({ owner: _id });
      res.json(placesDocs);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar os lugares do usuário" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao verificar os usuarios" });
  }
});

router.get("/:id", async (req, res) => {
  connectDb();

  const { id: _id } = req.params;

  try {
    const placeDoc = await Place.findOne({ _id });
    res.json(placeDoc);
  } catch (error) {
    res.status(500).json({ error: "Erro ao encontrar o lugar" });
  }
});

router.put("/:id", async (req, res) => {
  connectDb();
  const { id: _id } = req.params;

  const {
    title,
    city,
    photos,
    description,
    extras,
    price,
    perks,
    checkin,
    checkout,
    guests,
  } = req.body;

  try {
    const updatePlaceDoc = await Place.findOneAndUpdate(
      { _id },
      {
        title,
        city,
        photos,
        description,
        extras,
        perks,
        price,
        checkin,
        checkout,
        guests,
      }
    );

    res.json(updatePlaceDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar a acomodacao" });
  }
});

router.post("/", async (req, res) => {
  connectDb();
  const {
    owner,
    title,
    city,
    photos,
    description,
    extras,
    price,
    perks,
    checkin,
    checkout,
    guests,
  } = req.body;

  try {
    const { _id: owner } = await JWTVerify(req);

    const newPlaceDoc = await Place.create({
      owner,
      title,
      city,
      photos,
      description,
      extras,
      perks,
      price,
      checkin,
      checkout,
      guests,
    });

    res.json(newPlaceDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar o lugar" });
  }
});

router.post("/upload/link", async (req, res) => {
  const { link } = req.body;
  // const path = `${__dirname}/tmp/`;

  try {
    const { filename, fullPath, mimeType } = await downloadImage(link);

    const fileURL = await sendToS3(filename, fullPath, mimeType);

    res.json(fileURL);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao baixar a imagem" });
  }
});

router.post("/upload", uploadImage().array("files", 10), async (req, res) => {
  const { files } = req;

  const filesPromises = new Promise((resolve, reject) => {
    const fileURLArray = [];
    req.files.forEach(async (file, index) => {
      const { filename, path, mimetype } = file;

      try {
        const fileURL = await sendToS3(filename, path, mimetype);
        fileURLArray.push(fileURL);
      } catch (error) {
        console.error("Erro ao enviar para S3:", error);
        reject(error);
      }
    });

    const idInterval = setInterval(() => {
      if (files.length === fileURLArray.length) {
        clearInterval(idInterval);
        resolve(fileURLArray);
      }
    }, 100);
  });
  const fileURLArrayResolved = await filesPromises;
  res.json(fileURLArrayResolved);
});
export default router;
