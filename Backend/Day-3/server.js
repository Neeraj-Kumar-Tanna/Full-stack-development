const express = require("express");
const app = express();
app.use(express.json());

app.get("/" , (req , res)=>{
    res.send("hello world <3");
})

app.get("/about" , (req , res)=>{
    res.send("name : neeraj kumar tanna , class : 10");
})

const students = [];
app.post("/students" , (req , res)=>{
    console.log(req.body);
    students.push(req.body);
    res.send("data posted successfully");
})

app.get("/students" , (req , res)=>{
    res.send(students);
})

app.listen(3000 ,()=>{
    console.log("server started on port 3000.");
})