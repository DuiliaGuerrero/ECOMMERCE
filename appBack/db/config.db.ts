import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const connectDB = () => {
    const db = new Sequelize('ventapps', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });
}

export default  connectDB;
