const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const taskRoutes=require("./routes/tasksRoute");

const app = express();

//Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/tasks",taskRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}
startServer();
