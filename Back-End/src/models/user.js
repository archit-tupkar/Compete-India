const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        roles: {
            type: Object,
            default: {
                User: 1999,
            },
        },
        imageUrl: {
            type: String,
            default:
                "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
