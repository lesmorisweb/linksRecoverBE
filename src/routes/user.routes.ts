import { Router } from "express";
import { createUserController, deleteUserController, getUserByIdController, updateUserController } from "../controllers/user/user.controller";


const router= Router()

router.get("/get", getUserByIdController );
router.delete("/delete", deleteUserController);
router.post("/create", createUserController);
router.put("/update", updateUserController)

export default router