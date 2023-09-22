import { Router } from "express";
import AdmissionClientRoute from "../services/admission/admission.route";

const router = Router();

router.use("/", AdmissionClientRoute);

export default router;
