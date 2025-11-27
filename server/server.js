const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const cookingTipRoutes = require("./routes/cookingtipRoutes"); // Fixed the naming issue
const commentRoutes = require("./routes/commentRoutes");
const forumRoutes = require("./routes/forumRoutes");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Corrected API routes
app.use("/api/auth", authRoutes);
app.use("/api/recipe", recipeRoutes);
app.use("/api/cooking-tips", cookingTipRoutes); // Updated from "/api/cookingTip"
app.use("/api/comment", commentRoutes);
app.use("/api/forum", forumRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
