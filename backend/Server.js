const express=require('express');
const app=express();
// const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/titanic_data", { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(express.json())
// app.use(bodyParser.json());
app.use(cors());

const nameRouter=require("./routes/Router")
app.use('/test',nameRouter)

app.listen(5000,()=>{
    console.log("Server is running on port"+5000)
})