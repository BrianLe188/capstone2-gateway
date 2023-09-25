import { Router } from "express";
import AdmissionClientRoute from "../services/admission/admission.route";
import AuthClientRoute from "../services/auth/auth.route";

const router = Router();

router.use("/admission", AdmissionClientRoute);
router.use("/auth", AuthClientRoute);

export default router;
