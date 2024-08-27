//This is second approach to connect the database
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//async await is used because your DB is in different continent, so it will take time for application to reach
const connectDB = async () => {
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected! DB HOST: $
        {connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        // process.exit (1) used in the case of a MongoDB connection failure
        process.exit(1)
    }
}
export default connectDB