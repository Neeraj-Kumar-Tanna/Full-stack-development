// to create the server and add configs to it 

const express = require("express");
const studentModel = require("./models/students.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//post api
app.post("/api/students" ,async(req , res)=>{
    const {name , age} = req.body;

    const student = await studentModel.create({
        name , 
        age
    })

    res.status(201).json({
        message : "student data is added",
        student
    })
});

//get api
app.get("/api/students" , async(req , res)=>{
    const data = await studentModel.find()
    res.status(200).json({
        message : "data recived succesfully",
        data
    });
});

//delete api
app.delete("/api/students/:id" , async (req , res)=>{
    const id = req.params.id;
    await studentModel.findByIdAndDelete(id);
    res.status(200).json({
        message : "student data is deleted",
    });
})

//patch api
app.patch("/api/students/:id" , async (req , res)=>{
    const id = req.params.id;
    const {name} = req.body;

    await studentModel.findByIdAndUpdate(id , {
        name
    })

    res.status(200).json({
        message : "data updated successfully"
    })
})

module.exports = app;