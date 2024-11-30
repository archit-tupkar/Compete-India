const mongoose = require("mongoose");
//db connection

const connectDB = async () => {
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log("Connected to MongoDB :", new Date());
            return mongoose;
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
};
module.exports = connectDB;
