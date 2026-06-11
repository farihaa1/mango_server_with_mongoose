import { Router } from "express";
import userRoute from "../modules/user/user.route";
import MangoRoutes from "../modules/mango/mango.route";
import orderRoute from "../modules/order/order.route";
import authRouter from "../modules/auth/auth.route";

const routes = Router();

routes.use("/user", userRoute);
routes.use("/mango", MangoRoutes);
routes.use("/auth", authRouter);
routes.use("/order", orderRoute);

export default routes;
