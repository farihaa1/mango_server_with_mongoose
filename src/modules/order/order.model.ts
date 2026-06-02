import { Schema, model } from "mongoose";
import { IOrder, IOrderMethods, IOrderModel } from "./order.interface";
import Mango from "../mango/mango.model";
import { IMango } from "../mango/mango.interface";

const orderAddress = new Schema({
    zipCode: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
},
    {
        _id: false,
    })

const orderSchema = new Schema<
    IOrder,
    IOrderModel,
    IOrderMethods
>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        mangoId: {
            type: Schema.Types.ObjectId,
            ref: "Mango",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        totalPrice: {
            type: Number,
            min: 0,
        },
        status: {
            type: String,
            required: true
        },
        address: {
            type: orderAddress
        },

    },
    { timestamps: true }
);

orderSchema.pre("save", async function () {
    console.log("from pre doc ", this)
    const mango = await Mango.findById(this.mangoId);
    if (!mango) throw new Error("Mango not found");
    this.totalPrice = mango.price * this.quantity;
})
// orderSchema.post("save", function () {
//     console.log("from pre doc ",this)
// })

// orderSchema.pre("save", function (doc, next) {
//     console.log("from pre doc ",doc)
// })

orderSchema.methods.checkStock =
async function (id: string) {
    const mango = await Mango.findById(id);

    if (!mango) {
        throw new Error("Mango not found");
    }

    return mango.stock;
};


export const Order = model<IOrder, IOrderModel>("Order", orderSchema);