import { Request, Response } from "express";
import { Order } from "./order.model";
import { OrderDocument } from "./order.interface";

const createOrder = async (req: Request, res: Response) => {
    const order = new Order(req.body);
    const orderDoc = order as OrderDocument;

    const stock = await orderDoc.checkStock(
        orderDoc.mangoId.toString()
    );
    
    if (!stock && stock < 0) {
        throw new Error("insufficient stock")
    }
    await order.save()


    res.send({
        success: true,
        message: "Mango Ordered Successfully",
        data: order
    })
}
const getOrder = async (req: Request, res: Response) => {
    const order = await Order.find().populate("userId").populate("mangoId");

    res.send({
        success: true,
        message: "Mango Ordered Successfully",
        data: order
    })
}

const deleteOrder = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.id;
        const data = await Order.findByIdAndDelete(orderId);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "order not found from data"
            });
        }
        return res.status(200).send({
            success: true,
            message: "order deleted successfully"
        });

    } catch (error) {

        res.send({
            success: false,
            message: "error",
            error
        })

    }
}

export const orderController = {
    createOrder,
    getOrder,
    deleteOrder
}