import multer, { diskStorage } from 'multer';

const UPLOAD_DIR = 'D:/nti course/final project/portfolio/public';

export function uploadFile() {
  const storage = diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
      const uniqueName =  file.originalname;
      cb(null, uniqueName);
    },
  });

  const multerUpload = multer({ storage });
  return multerUpload;
}
