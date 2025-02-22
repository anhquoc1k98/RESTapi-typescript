import * as express from "express";
import { UserController } from "../controller/UseController";

const router = express.Router();

router.get("/users", UserController.getAllUsers);

export default router;
