import { Router } from "express";
import { getUser, registerUser } from "./user.controller";


const userRoute = Router();
userRoute.post("/user", registerUser);
userRoute.get("/user", getUser);


export default userRoute