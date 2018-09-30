const mongoose = require("mongoose")

const user = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: String,
    avatar: String,
    desc:String
}, {
    versionKey: false
}, {
    timestamps: {
        createdAt: 'createdTime',updateAt:"updateTime"
    }
})

module.exports = mongoose.model("user", user)