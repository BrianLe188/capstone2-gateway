import { Router } from "express";
import CoreClientRoute from "../services/core/core.route";
import AuthClientRoute from "../services/auth/auth.route";
import AdmissionRoute from "../services/admission/admission.route";
import MessageRoute from "../services/message/message.route";

const router = Router();

router.use("/core", CoreClientRoute);
router.use("/auth", AuthClientRoute);
router.use("/admission", AdmissionRoute);
router.use("/message", MessageRoute);

export default router;
