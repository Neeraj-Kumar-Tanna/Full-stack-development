//used to create and server
const express = require("express");
const app = express();
app.use(express.json());

const students = [];
// POST api
app.post("/students" , (req , res)=>{
    console.log(req.body);
    students.push(req.body);
    res.send("data is recived");
});
// GET api
app.get("/students" , (req , res)=>{
    res.send(students);
})
//DELETE api
app.delete("/students/:index" , (req , res)=>{
    delete students[req.params.index];
    console.log(req.params.index);
    res.send(students);
})
//PATCH api
app.patch("/students/:index", (req , res)=>{
    students[req.params.index].name = req.body.name;
    res.send(students);
})

module.exports = app;