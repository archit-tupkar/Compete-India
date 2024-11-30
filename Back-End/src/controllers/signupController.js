const User = require("../models/user");
const createError = require("../utils/errorHandler");
const bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !password || !email)
        return next(createError(400, "All fields required"));

    try {
        const foundUser = await User.findOne({ username });
        if (foundUser) return next(createError(401, "Account already exist"));
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            success: true,
            message: "User created, Signup Succesful",
        });
    } catch (error) {
        next(error);
    }
};
module.exports = signup;
