const express = require("express");

const app = express();
const notesModel = require("./models/notes.model");

app.use(express.json());

//Post Api
app.post("/notes" , async (req , res)=>{
    const title = req.body.title;
    const discription = req.body.discription;

    const note = await notesModel.create({
        title,
        discription
    })

    res.status(201).json({
        message : "note is created",
        data : note
    })
});

//GET api
app.get("/notes" , async (req , res)=>{
    const notes = await notesModel.find();

    res.status(200).json({
        message : "data recived successfully",
        data : notes
    });
})

module.exports = app;