import React, { useState } from "react";
import Perks from "./Perks";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import PhotoUploader from "./PhotoUploader";

const NewPlace = () => {
  const { user } = useUserContext();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extras, setExtras] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [photolink, setPhotoLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      title &&
      city &&
      description &&
      price &&
      checkin &&
      checkout &&
      guests
    ) {
      try {
        const newPlace = await axios.post("/places", {
          owner: user._id,
          title,
          city,
          photos,
          description,
          perks,
          extras,
          price,
          checkin,
          checkout,
          guests,
        });

        console.log(newPlace);
        setRedirect(true);
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    } else {
      alert(
        "Por favor, preencha todos os campos antes de enviar o formulário.",
      );
    }
  };

  if (redirect) return <Navigate to={"/account/places"} />;

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 px-8">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="ml-2 text-2xl font-bold">
          Título
        </label>
        <input
          type="text"
          placeholder="Digite o titulo do seu anuncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="ml-2 text-2xl font-bold">
          Cidade e País
        </label>
        <input
          type="text"
          placeholder="Digite a cidade e o país do seu anuncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          value={city}
          id="city"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <PhotoUploader {...{ photolink, setPhotoLink, setPhotos, photos }} />

      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="ml-2 text-2xl font-bold">
          Descrição
        </label>
        <textarea
          placeholder="Digite a descrição do seu anuncio"
          className="h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2"
          value={description}
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="ml-2 text-2xl font-bold">
          Comodidades
        </label>
        <Perks perks={perks} setPerks={setPerks} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Extras" className="ml-2 text-2xl font-bold">
          Informações adicionais
        </label>
        <textarea
          placeholder="Digite aqui qualquer informação adicional que queira compartilhar com seus hóspedes"
          className="h-56 resize-none rounded-2xl border border-gray-300 px-4 py-2"
          value={extras}
          id="extras"
          onChange={(e) => setExtras(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2 htmlFor="Extras" className="ml-2 text-2xl font-bold">
          Restrições e preço
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="ml-2 font-bold">
              {" "}
              Preço{" "}
            </label>
            <input
              type="number"
              placeholder="500"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={price}
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="checkin" className="ml-2 font-bold">
              Checkin
            </label>
            <input
              type="text"
              placeholder="16:00"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={checkin}
              id="checkin"
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="checkout" className="ml-2 font-bold">
              {" "}
              Checkout{" "}
            </label>
            <input
              type="text"
              placeholder="10:00"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={checkout}
              id="checkout"
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="guests" className="ml-2 font-bold">
              {" "}
              N de convidados{" "}
            </label>
            <input
              type="number"
              placeholder="3"
              className="rounded-full border border-gray-300 px-4 py-2"
              value={guests}
              id="guests"
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="bg-primary-400 hover:bg-primary-500 min-w-44 cursor-pointer rounded-full px-4 py-2 font-bold text-white transition">
        Salvar informações
      </button>
    </form>
  );
};

export default NewPlace;
