import { Router } from "express";
import userRoutes from "./user.routes";
import linksRoutes from "../controllers/user/operators/links.routes";



const router= Router();

router.get("user/", userRoutes)
router.get("/links", linksRoutes)

export default router