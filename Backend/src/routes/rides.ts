import { Router } from "express";
const router = Router();
import { createRide, fetchRides } from "../controllers/rideController";

router.post("/create", createRide);
router.get("/fetch",fetchRides);
export default router;