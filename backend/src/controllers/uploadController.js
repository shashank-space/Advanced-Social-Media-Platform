import fs from "fs";
import cloudinary from "../config/cloudinary.js";

export const uploadMedia = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const result = await cloudinary.uploader.upload(
      req.file.path,
      {
        resource_type: "auto",
        folder: "advanced-social-media",
      }
    );

    fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};