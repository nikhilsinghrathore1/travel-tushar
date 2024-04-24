const mongoose = require("mongoose");
const users = require("./users");

mongoose.connect("mongodb://127.0.0.1:27017/travelDB");

const postSchema = mongoose.Schema({
 imageText: String,
 image:String,

});

module.exports = mongoose.model("post",postSchema);