import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
    console.log('Banco de dados conectada com sucesso!');
});

export default {
    query: (text: string, params: any[]) => pool.query(text, params),
  };