let express = require("express")
let bodyParser = require("body-parser")
const { request, response } = require("express")
let app = express()

app.use(bodyParser.urlencoded({extended:true}))


app.get("/index", (request,response)=> {
    response.sendFile(__dirname+"\\index.html");
})

app.get("/insertdata", (request,response)=> {
    response.sendFile(__dirname+"\\insertdata.html");
})

app.get("/getdata", (request,response)=> {
    response.sendFile(__dirname+"\\getdata.html");
})

app.get("/updatedata", (request,response)=> {
    response.sendFile(__dirname+"\\updatedata.html");
})

app.get("/deletedata", (request,response)=> {
    response.sendFile(__dirname+"\\deletedata.html");
})





app.listen(8080,()=>console.log("Server running on port number 8080"))