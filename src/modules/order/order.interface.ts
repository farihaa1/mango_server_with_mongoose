import { HydratedDocument, Model, Types } from "mongoose";

export interface IOrder {
    userId: Types.ObjectId;
    mangoId: Types.ObjectId;
    quantity: number;
    totalPrice: number;
    status: string;
    address: {
        zipCode: string;
        state: string;
        country: string;
    };
}

export interface IOrderMethods {
    checkStock(id: string): Promise<number>;
}

export type OrderDocument =
    HydratedDocument<IOrder, IOrderMethods>;

export interface IOrderModel extends Model<IOrder> {}