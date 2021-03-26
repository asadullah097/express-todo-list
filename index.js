const express=require('express');
const app=express();
const dotenv = require("dotenv");
//model

dotenv.config();
const MongoClient = require("mongoose");

MongoClient.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
});
const router=require('./rotues/todo');
const PORT=5000;
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use("/public",express.static("public"))
app.use('/',router);

app.listen(PORT,() => console.log("Server Up and running"));