const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.status(200).json({
        msg: "API is running",
    });
    
});

app.listen(3000, console.log("Server Started at PORT:3000"));
