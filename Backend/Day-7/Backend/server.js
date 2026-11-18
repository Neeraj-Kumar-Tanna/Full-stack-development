// starts server and connect database
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/database");

connectToDB();


app.listen(process.env.PORT , ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});