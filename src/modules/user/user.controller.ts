import { Request, Response } from "express";
import User from "./user.model"

import * as z from "zod";
 


const registerUser = async (req: Request, res: Response) => {

    const zodSchema = z.object({
        name:z.string().min(3),
        email:z.string(),
        phone:z.string(),
        password:z.string(),
        role:z.string(),
    })

    
    const payload = req.body;
    const error = zodSchema.parseAsync(payload);


    const user = new User(payload);

    const data = await user.save()
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

export { registerUser ,getUser}