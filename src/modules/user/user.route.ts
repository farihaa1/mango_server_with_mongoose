import { Router } from "express";
import { getUser, registerUser } from "./user.controller";


const userRoute = Router();
userRoute.post("/", registerUser);
userRoute.get("/", getUser);


export default userRoute