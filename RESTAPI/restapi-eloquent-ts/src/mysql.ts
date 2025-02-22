import { createPool, Pool } from "mysql2/promise";
import { config } from "dotenv";

config();

class Mysql {
    private pool: Pool;
    private static instance: Mysql;

    //
    private constructor() {
        this.pool = createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }
    //single instance duy nhat
    static gI():Mysql{
        if(!Mysql.instance){
            Mysql.instance = new Mysql();
        }
        return Mysql.instance;
    }
    getConnect():Pool{
       return this.pool;
    }
}
export default Mysql.gI();
