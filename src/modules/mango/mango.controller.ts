import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {
    try {
        const data = await Mango.create(req.body);
        res.send({
            success: true,
            message: "mango created successfully",
            data
        })

    } catch (error) {

        res.send({
            success: false,
            message: "error",
            error
        })

    }
}


const getMango = async (req: Request, res: Response) => {
    try {
        const data = await Mango.find();
        res.send({
            success: true,
            message: "mango retrieved successfully",
            data
        })

    } catch (error) {

        res.send({
            success: false,
            message: "error",
            error
        })

    }
}
const getMangoById = async (req: Request, res: Response) => {
    try {
        const mangoId = req.params.mangoId;
        const data = await Mango.findById(mangoId);
        res.send({
            success: true,
            message: "mango retrieved successfully",
            data
        })

    } catch (error) {

        res.send({
            success: false,
            message: "error",
            error
        })

    }
}
const updateMango = async (req: Request, res: Response) => {
    try {
        const mangoId = req.params.mangoId;
        const data = await Mango.findByIdAndUpdate(
            mangoId,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Mango not found"
            });
        }else{
            return res.send({
                success: true,
                message: "Mango updated successfully"
            });
        }

    } catch (error) {

        res.send({
            success: false,
            message: "error",
            error
        })

    }
}
const deleteMango = async (req: Request, res: Response) => {
    try {
        const mangoId = req.params.mangoId;
        const data = await Mango.findByIdAndDelete(mangoId);

        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Mango not found"
            });
        }

    } catch (error) {

        res.send({
            success: false,
            message: "error",
            error
        })

    }
}

export const mangoController = {
    createMango,
    getMango,
    getMangoById,
    updateMango,
    deleteMango,
}