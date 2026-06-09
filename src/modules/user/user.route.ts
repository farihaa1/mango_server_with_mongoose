import { Router } from "express";
import { getUser, loginUser, registerUser } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { userZodSchema } from "./user.validate";


const userRoute = Router();

userRoute.post("/", validateRequest(userZodSchema.userCreateZodSchema), registerUser);

userRoute.post("/", validateRequest(userZodSchema.userLoginZodSchema), loginUser);

userRoute.get("/", getUser);


export default userRoute