const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/auth", authRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log("Database sync error:", err));
