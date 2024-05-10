import { Router } from "express";
const router = Router();
import { createRide } from "../controllers/rideController";

router.post("/create", createRide);
router.post("/fetch", );


export default router;