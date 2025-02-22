import mysql from "../mysql";
export default class Model {

    static tableName: string;
    private fields: string[] = [];
    static async find(id: number) {
        const connect = mysql.getConnect();
        const [rows]: any = await connect.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
        return rows[0] || null;
    }

    select(fileds: string[]): this {
        this.fields = fileds;
        return this;
    }
    get(){
        
        return `SELECT * FROM `
    }
}