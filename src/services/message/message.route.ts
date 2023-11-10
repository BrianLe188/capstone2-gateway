import { Router } from "express";
import messageController from "./message.controller";

const router = Router();

router.get("/messages/:id", messageController.getMessages);

export default router;
