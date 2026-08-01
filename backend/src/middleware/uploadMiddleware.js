import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowed =
    /jpg|jpeg|png|gif|webp|mp4|mov|avi/;

  const ext = allowed.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (ext) {
    cb(null, true);
  } else {
    cb(new Error("Invalid File Type"));
  }
};

export default multer({
  storage,
  fileFilter,
});