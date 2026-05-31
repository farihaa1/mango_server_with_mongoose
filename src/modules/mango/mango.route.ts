import { Router } from "express";
import { mangoController } from "./mango.controller";

const MangoRoutes = Router();

MangoRoutes.post("/", mangoController.createMango)
MangoRoutes.get("/", mangoController.getMango)
MangoRoutes.get("/:mangoId", mangoController.getMangoById)
MangoRoutes.patch("/:mangoId", mangoController.updateMango)

export default MangoRoutes