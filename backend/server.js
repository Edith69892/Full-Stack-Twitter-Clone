import express from 'express';
import cors from 'cors';
import {app} from "./app.js"
import dotenv from 'dotenv/config';
import mongoose from 'mongoose';  

const PORT = process.env.PORT || 5000;

dotenv.config({
  path : "./.env"
});

;(async () =>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/X-Clone`)

    app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
  } catch (error) {
    console.error("Error connecting to the database:", error);  
  }
})()

