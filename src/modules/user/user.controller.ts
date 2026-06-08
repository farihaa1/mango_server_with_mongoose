import { Request, Response } from "express";
import User from "./user.model"

import * as z from "zod";
import { userService } from "./user.service";



const registerUser = async (req: Request, res: Response) => {


    const payload = req.body;
    const data = await userService.registerUser(payload);
    res.send({
        success: true,
        message: "user created successfully",
        data
    })


}
const loginUser = async (req: Request, res: Response) => {


    const payload = req.body;
    const data = await userService.registerUser(payload);
    res.send({
        success: true,
        message: "user created successfully",
        data
    })


}


const getUser = async (req: Request, res: Response) => {

    const data = await User.find()
    res.send({
        success: true,
        message: "user retieved successfully",
        data
    })


}

export { registerUser, getUser }