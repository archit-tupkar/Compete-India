const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoute = require("./src/routes/authRoute");
const userRoute = require("./src/routes/userRoute");
const connectToDB = require("./src/config/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const error = err.message || "something went wrong";
    return res.status(statusCode).json({
        success: false,
        error,
        statusCode,
    });
});

app.listen(process.env.PORT, async () => {
    try {
        await connectToDB();
        console.log(`
            -------------------------
    
            server running at: http://localhost:3000
    
            ------------------------`);
    } catch (error) {
        console.log("Encounterd error while starting: ", error);
    }
});
