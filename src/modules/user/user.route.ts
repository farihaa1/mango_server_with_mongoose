import { Router } from "express";
import { getUser, loginUser, registerUser } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { userZodSchema } from "./user.validate";
import { auth } from "../../middleware/auth";
import { UserRole } from "./user.constrain";


const userRoute = Router();

userRoute.post("/", validateRequest(userZodSchema.userCreateZodSchema), registerUser);

userRoute.post("/", validateRequest(userZodSchema.userLoginZodSchema), loginUser);

userRoute.get("/", auth([UserRole.Admin, UserRole.Customer]), getUser);


export default userRoute