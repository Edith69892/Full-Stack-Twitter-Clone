import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name : {
            type: String,
            required: true,
            trim: true
        },
        username : {
            type: String,
            required: true,
            unique: true,
        },
        email : {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        refreshToken : {
            type : String
        }
    },{timestamps: true}
)

export const User = mongoose.model("User",userSchema) 