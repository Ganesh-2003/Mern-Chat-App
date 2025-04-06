const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: {type: String, trime: true},
    chat: {type: mongoose.Schema.Types.ObjectId, ref: "Chat"}

},  {
        timestamps: true
    }
);

const Message = mongoose.model("Message", messageSchema)

module.export = Message;