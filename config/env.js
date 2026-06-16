import { configDotenv } from "dotenv";

export const env = {
    db: process.env.db,
    port: process.env.port,
}

export default env;