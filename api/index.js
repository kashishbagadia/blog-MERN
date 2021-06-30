const connectDB = require("./config/db");

const userRoute = require("./routes/users");

const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
app.use(express.json());

connectDB();
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen("5000", () => {
    console.log("Backend is running!!")
})