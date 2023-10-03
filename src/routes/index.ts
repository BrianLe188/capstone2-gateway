import { Router } from "express";
import CoreClientRoute from "../services/core/core.route";
import AuthClientRoute from "../services/auth/auth.route";
import FileClientRoute from "../services/file/file.route";

const router = Router();

router.use("/core", CoreClientRoute);
router.use("/auth", AuthClientRoute);
router.use("/file", FileClientRoute);

export default router;
