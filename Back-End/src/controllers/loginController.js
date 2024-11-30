const User = require("../models/user");
const createError = require("../utils/errorHandler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userInfoFilter = require("../utils/userInfoFilter");
dotenv.config();

const login = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !password)
        return next(createError(400, "All fields required"));

    try {
        const foundUser = await User.findOne({ username });
        if (!foundUser) return next(createError(400, "User dont exisit"));
        const verifyPassword = bcrypt.compareSync(password, foundUser.password);
        if (!verifyPassword)
            return next(createError(403, "Username or Password Incorrect"));
        const userInfo = userInfoFilter(foundUser);
        // const userID = foundUser._id;
        const accessToken = jwt.sign(
            { userId: foundUser._id },
            process.env.ACCESS_SECRET,
            { expiresIn: "15m" }
        );
        const refreshToken = jwt.sign(
            { userId: foundUser._id },
            process.env.REFRESH_SECRET,
            { expiresIn: "30d" }
        );

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        })
            .status(200)
            .json({
                success: true,
                message: "Login Successful",
                token: accessToken,
                userInfo,
            });
    } catch (error) {
        next(error);
    }
};

module.exports = login;
