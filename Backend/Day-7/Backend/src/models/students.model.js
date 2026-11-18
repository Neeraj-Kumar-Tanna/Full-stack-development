const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
});

const studentModel = mongoose.model("students" , studentSchema);

module.exports = studentModel;