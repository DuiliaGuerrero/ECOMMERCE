import express, { Express } from 'express';

import * as dotenv from 'dotenv';
import ecommerceRoute from '../routes/ecommerce.route'

dotenv.config();


class Server{
    private app: Express;
    private port: number | undefined;
    private apiPaths ={
        saludo: '/',
    }


    constructor() {
        this.app = express();
        if(process.env.PORT){
           this.port = parseInt(process.env.PORT)
        }else{
            this.port = 8080;
        }
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

