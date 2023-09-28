import { Router } from "express";
import CoreClientRoute from "../services/core/core.route";
import AuthClientRoute from "../services/auth/auth.route";

const router = Router();

router.use("/core", CoreClientRoute);
router.use("/auth", AuthClientRoute);

export default router;
