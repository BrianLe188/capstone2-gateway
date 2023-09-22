import { Router } from "express";
import admissionController from "./admission.controller";

const router = Router();

// modules
router.post("/modules", admissionController.createModule);
router.put("/modules/:id", admissionController.updateModule);
router.delete("/modules/:id", admissionController.deleteModule);

export default router;
