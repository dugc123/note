const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const article = new mongoose.Schema({
    title: {
        type: String,
        index:1
    },
    content: String,
    contentText: String,
    looknums: {
        type: Number,
        default: 0
    },
    commentnums: {
            type: Number,
            default: 0
        },
    author: {
        type:Schema.Types.ObjectId,
        ref: 'user'
    },
      category: {
          type: Schema.Types.ObjectId,
          ref: 'category'
      }
}, {
    versionKey: false,
    timestamps: {
        createAt: "createTime",
        updateAt: "updateTime"
    }
})

module.exports = mongoose.model("article", article)