import express from "express";
const router = express.Router();
import { authUser, getUsersProfile } from "../controlers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router.route("/profile").get(protect, getUsersProfile);

export default router;
