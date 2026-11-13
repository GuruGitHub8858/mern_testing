import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const db = () => {
    try {
        mongoose.connect(process.env.MONGODB)
        console.log("db has been connected");
    }
    catch (err) {
        console.error(err);
    }
}
export default db;