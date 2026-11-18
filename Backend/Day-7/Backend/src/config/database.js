// create  database .

const mongoose = require("mongoose");

const connectToDB = async ()=>{
    await mongoose.connect(process.env.DB_URL2)
        .then(()=>{
            console.log("connected to database");
        })
}

module.exports = connectToDB;