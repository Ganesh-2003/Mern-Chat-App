const express = require("express");
const dotenv  = require("dotenv")
const chats= require("./data/data");
const cors = require("cors")


const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {

    res.status(200).json({
        msg: "API is running Successfully",
    });
    
});

app.get("/api/chat", (req,res) =>{

    res.send(chats);

})

app.get("/api/chat/:id", (req,res) => {

    const id = req.params.id;
    //const singleChat = chats.find((c) => c._id === id) // Potential way to find id
    
    for (let i = 0;i<chats.length; i++) {
        if(chats[i]._id === id) {
            const singleChat = chats[i];
            res.send(singleChat);
        }
    }
    
    res.send(404).json({
        msg: "id value is wrong Chat is not found"
    })
    
})

const PORT = process.env.PORT ||  5000

app.listen(PORT ,()=>{
    console.log(`Server Started in Port: ${PORT}`);
});
