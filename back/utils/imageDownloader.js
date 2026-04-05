import download from "image-downloader";
import mime from "mime-types";

export const downloadImage = async (link, destination) => {
  const mimeType = mime.lookup(link);
  const contentType = mime.contentType(mimeType);
  const extension = mime.extension(contentType);

  const filename = `${Date.now()}.${extension}`;
  const fullPath = `${destination}${filename}`;

  try {
    const options = {
      url: link,
      dest: fullPath,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      }, // will be saved to destination
    };
    await download.image(options);
    console.log("Saved to", filename);
    console.log(fullPath);
    return filename;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
