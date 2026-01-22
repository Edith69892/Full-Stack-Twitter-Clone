import { Post } from "../models/post.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";


const addPost = asyncHandler(async (req, res) => {

    const { postContent } = req.body;

    if (!postContent?.trim()) {
        throw new ApiError(400, "Post content is required");
    }

    if (!req.user?._id) {
        throw new ApiError(401, "Unauthorized! Please login to continue.");
    }

    const fileImages = req.files || []

    const uploadedImages = [];

    for (const file of fileImages) {
        const uploadedImage = await uploadOnCloudinary(file.path);
        if (uploadedImage) {
            uploadedImages.push({
                url: uploadedImage.secure_url,
                publicId: uploadedImage.public_id
            })
        }
    }


    const newPost = await Post.create({
        content: postContent,
        images: uploadedImages,
        author: req.user?._id
    })

    res.status(201).json(
        new ApiResponse(201, "Post created successfully", newPost)
    )

})