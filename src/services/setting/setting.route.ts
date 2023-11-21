import { Router } from "express";
import settingController from "./setting.controller";
import multer from "multer";

const upload = multer();
const router = Router();

router.post(
  "/import-qa-template",
  upload.single("file"),
  settingController.importQATemplate
);

export default router;
