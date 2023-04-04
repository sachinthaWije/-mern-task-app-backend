const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, //set primary key
        trim: true //remove white spaces
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
            }
        }
    ] //array
});




const User = mongoose.model("User", userSchema);
module.exports = User;