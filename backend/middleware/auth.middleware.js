import { User } from "../models/user.model.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"

const authenticateUser = asyncHandler(async (req, res, next) => {

    try {
        //token from cookies
        const token = req.cookies.accessToken

        if (!token) {
            throw new ApiError(401, "Access token missing. Please login to continue.")
        }
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decoded._id).select("-password -refreshToken")
        if (!user) {
            throw new ApiError(401, "User not found. Invalid token.")
        }
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, "Invalid or expired token. Please login again.")
    }
})

export { authenticateUser }