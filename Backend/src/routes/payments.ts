import { Router } from "express";
import { checkout, publishableKey } from "../controllers/paymentController";
const router = Router();
router.get("/pubKey",publishableKey )
router.post("/checkout", checkout);

router.post("create-payment-intent", )
// router.post("/paymentverification",payment)
export default router;