import express from "express"
import { auth } from "../middlewares/auth.js";
import { getPublishedCreations, getUserCreations, toggleLikedCreation } from "../controllers/useController.js";

const userRouter = express.Router();

userRouter.get('/get-user-creations', auth, getUserCreations)

userRouter.get('/get-published-creations', auth, getPublishedCreations)

userRouter.post('/toggle-like-creations', auth, toggleLikedCreation)

export default userRouter;
