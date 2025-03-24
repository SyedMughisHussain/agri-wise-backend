import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const uploadToCloudinary = async (imageUrl) => {
  cloudinary.config({
    cloud_name: "dadvcuwkk",
    api_key: "593186932939832",
    api_secret: "PFPudJmXD9rckaWhJ6RP7e7Cf6M",
  });

  const uploadResult = await cloudinary.uploader
    .upload(imageUrl)
    .catch((error) => {
      console.log(error);
    });

  fs.unlinkSync(imageUrl);
  return uploadResult;
};
