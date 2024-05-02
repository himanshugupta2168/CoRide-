import { Router } from "express";
const router = Router();
import { signUp } from "../controllers/userController";
router.post("/signin", signUp);

export default  router;