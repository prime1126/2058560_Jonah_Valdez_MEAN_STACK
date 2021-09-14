// load the express module 
let express = require("express");

// create the reference of express module 
let app = express();

const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://suppeople111:valdez111@cluster0.m67mc.mongodb.net/message-database?retryWrites=true&w=majority'
const Msg = require("./messages");
mongoose.connect(mongoDB, {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected");
}).catch(err => console.log(err))
//set the url 
let url = "mongodb://localhost:27017";

// then load the express-ws module and create the reference 
//of express-ws with the help of express reference using 
// IIFE
let ws = require("express-ws")(app);

// http://localhost:9090
// open the html static web page 
app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\index.html");
})

app.ws("/",(socket,request)=> {
    console.log("Client connected");

    // recieve message from client application 
    socket.on("message", msg=> {
        const message = new Msg({msg});
        message.save().then(()=>{
        })
        
    });
    // This is use to send the data to the client application.
    socket.send("Hello Client, YOu are connect the Socket Server App!");
})


app.listen(9090,()=>console.log("Server running on port number 9090"))

