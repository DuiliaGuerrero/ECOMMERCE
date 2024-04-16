import { Router } from "express";
import { Request, Response } from "express";
import { helloWorld } from "../controllers/ecommerce.controller";

const router = Router();

router.get('/', (req:Request, res:Response) =>{
    try{
        res.status(200).json({
            msg: "Funciona",
            saludo: helloWorld(),
        })
    }catch (e) {
        res.status(500).json({ msg: "Error del servidor" });
    }
})

export default router;