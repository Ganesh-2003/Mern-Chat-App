const mongoose = require("mongoose")

const userSchema = mongoose.schema({

    name: {type: String,require: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    pic: {type: String, required: true, default: 
        "https://shorturl.at/u5MZx"
    }
}, {
    timeStamps: true
})

const User = mongoose.Model("User",userSchema);

module.exports = User;