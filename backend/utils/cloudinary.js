import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async(filePath) => {
    try {
        if(!filePath) {
            throw new Error("File path is required for upload");
        }

        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'auto',
            folder: 'X-Clone/upload-images'
        })

        fs.unlinkSync(filePath); // Delete the local file after upload
        return result;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        fs.unlinkSync(filePath)
        return null;
    }
}

export { uploadOnCloudinary };