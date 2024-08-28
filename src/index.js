// importing dotenv here, so as soon as the application loads, all the env variable are available everywhere.
//require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERR:", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () =>{
        console.log(` Server is running at port : $
            {process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
})




//This is first approach to connect the database

/*
import express from "express";
const app= express()

//whenever working with DB, we must use async await 
( async ()=> {
    try{
        //Using both connection string variable and database name to connect database is good practice.
       await mongoose.connect(`${process.env.MONGODB_URI}/
        ${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Err:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error){
        console.error("ERROR:", error)
        throw err
    }
})()
//this is an IIFE (Immediately Invoked Function Expression) 

*/