import { Request, Response } from "express";
import { IUser } from "./user.interface";
import User from "./user.model";
import AppError from "../../error/appError";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const registerUser = async (payload: IUser) => {
    payload.password = await bcrypt.hash(payload.password, 10);
    const user = new User(payload);
    const data = await user.save();
    return data;
}
const loginUser = async (payload: IUser) => {
    const isUserExist = await User.findOne({ email: payload.email })

    if (!isUserExist) throw new AppError(404, "User not found")

    const checkPassword = await bcrypt.compare(
        payload.password,
        isUserExist.password
    );
    if (!checkPassword) throw new AppError(403, "Password doesn't match");

    const jwtPayload = {
        email: payload.email,
        role: isUserExist.role,
    }
    const accessToken = jwt.sign(jwtPayload, "very secret", { expiresIn: "7d" })

    return accessToken;

}
const refreshToken = {};


export const userService = {
    registerUser,
    loginUser,
    refreshToken
}





