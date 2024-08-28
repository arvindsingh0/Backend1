import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
//is a middleware that enables CORS for your application.
//Without CORS: Your API might block requests coming from a different origin.
//For example, if your frontend (client) is running on http://localhost:3000, and your backend (server) is running on http://localhost:4000, making an HTTP request from the frontend to the backend would be considered a cross-origin request. The browser will block this request unless the server explicitly allows it.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//middleware, that parses incoming JSON requests, making the data accessible via req.body. The limit: "16kb" option restricts the maximum size of the JSON payload to 16 kilobytes, protecting your appl from  (DoS) 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) 
app.use(cookieParser())
                               
export { app }                             