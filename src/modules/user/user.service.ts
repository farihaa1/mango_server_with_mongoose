import { IUser } from "./user.interface";
import User from "./user.model";

const bcrypt = require('bcrypt');

const registerUser = async (payload: IUser) => {
    payload.password = await bcrypt.hash(payload.password, 10);
    const user = new User(payload);
    const data = await user.save();
    return data;
}
const loginUser = async (payload: IUser) => {
    payload.password = await bcrypt.hash(payload.password, 10);
    const user = new User(payload);
    const data = await user.save();
    return data;
}


export const userService = {
    registerUser,
}





