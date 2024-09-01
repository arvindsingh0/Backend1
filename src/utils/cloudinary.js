import {v2 as cloudinary} from "cloudinary"

//fs is a node js filesystem, enabling you to use all the file management

import fs from "fs"
import { url } from "inspector";

//This config will give permission to upload files
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return  null
        //upload the file on cloudinary
        const response= await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        } )
        // File has been uploaded successfully
        console.log("File is uploaded on cloudinary",
            response.url);               
            return response;
    } catch(error){
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


export {uploadOnCloudinary}

