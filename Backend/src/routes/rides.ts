import { Router } from "express";
const router = Router();
import { createRide, fetchRides,  fetchRequets } from "../controllers/rideController";

router.post("/create", createRide);
router.get("/fetch",fetchRides);
// router.post("/checkout", checkout);
// router.post("/paymentverification",payment)
router.get("/fetchRequests/", fetchRequets)
export default router;