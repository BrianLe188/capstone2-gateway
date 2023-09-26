import { Router } from "express";
import authController from "./auth.controller";
import { isExistUser } from "../../middlewares/user";

const router = Router();

router.get("/users", authController.getAllUser);
router.post("/register", isExistUser, authController.createUser);
router.post("/login", authController.login);
router.put("/users/:id", authController.updateUser);
router.delete("/users/:id", authController.deleteUser);

router.post("/roles", authController.createRole);
router.put("/roles/:id", authController.updateRole);
router.delete("/roles/:id", authController.deleteRole);

export default router;
