import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config();
export const db = mysql.createConnection({
    host: process.env.SERVER_NAME_HOST,
    user: process.env.SERVER_USER_HOST,
    password: process.env.SERVER_PASSWORD_HOST,
    database: process.env.SERVER_DATABASE_HOST,
})