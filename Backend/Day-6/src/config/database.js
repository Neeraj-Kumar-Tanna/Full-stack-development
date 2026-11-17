const mongoose = require("mongoose");

const connectToDB = ()=>{
    mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("connected to database");
        })
}

module.exports = connectToDB;