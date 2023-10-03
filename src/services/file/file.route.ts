import { Router } from "express";
import multer from "multer";
import fileController from "./file.controller";

const router = Router();

const upload = multer();

router.post("/upload/:folder", upload.single("file"), fileController.upload);

export default router;
