import express from "express";
import app from "./app.js";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Resolve directory
const __dirname = path.resolve();

// Serve static files from frontend (Vite/React build)
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Fallback route (for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
