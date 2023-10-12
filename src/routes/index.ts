import { Router } from "express";
import CoreClientRoute from "../services/core/core.route";
import AuthClientRoute from "../services/auth/auth.route";
import AdmissionRoute from "../services/admission/admission.route";

const router = Router();

router.use("/core", CoreClientRoute);
router.use("/auth", AuthClientRoute);
router.use("/admission", AdmissionRoute);

export default router;
