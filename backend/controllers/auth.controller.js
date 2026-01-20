import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const signUp = asyncHandler(async (req, res, next) => {

    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    //email validation regex

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new ApiError(400, "Invalid email format");
    }

    // check if user already exists

    const existingUser = await User.findOne({ $or: [{ email }, { username }] })

    if (existingUser) {
        throw new ApiError(400, "User already exists.")
    }

    // password validatoin regex

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        throw new ApiError(400, "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }

    const user = await User.create({
        name, username, email, password,
    })

    if (!user) {
        throw new ApiError(500, "User Signup failed. Please try again.")
    }

    res.status(201).json(
        new ApiResponse(201, "User registered successfully", {
            userId: user._id,
            name: user.name,
            username: user.username,
            email: user.email
        })
    )
})