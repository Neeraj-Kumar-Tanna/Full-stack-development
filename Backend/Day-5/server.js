// to start server and connect database

const app = require("./src/app");
const mongoose = require("mongoose");

const connectToDB = ()=>{
    mongoose.connect("mongodb+srv://neerajkumartanna_db_user:jv1EcJsiWtusVELc@backend-learning.fabs9ze.mongodb.net/day-5")
        .then(()=>{
            console.log("connected to database . ");
        })
}

connectToDB();

app.listen(3000 , ()=>{
    console.log("server started at port 3000");
})