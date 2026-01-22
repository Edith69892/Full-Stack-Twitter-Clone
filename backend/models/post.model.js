import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        images: [
            {
                url: {
                    type: String,
                },
                publicId: {
                    type: String,
                },

            }
        ],
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ]
    },
    { timestamps: true }
)