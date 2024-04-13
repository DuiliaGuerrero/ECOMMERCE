import express from 'express';
import { Application } from 'express';
import * as dotenv from 'dotenv';
import ecommerceRoute from '../routes/ecommerce.route'

dotenv.config();


class Server{
    private app: Application
    private readonly port: string  | undefined;
    private apiPaths ={
        saludo: '/',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //Lectura y parse de body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.apiPaths.saludo, ecommerceRoute)
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Servidor rodando en el puerto: ${this.port}`);
        })
    }
}

export default Server;

