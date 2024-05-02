import { Router } from "express";
const router = Router();
router.get("/", (req, res)=>{
    res.send("from ridesRoute")
})
export default router