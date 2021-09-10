let mongoClient = require("mongodb").MongoClient;
//set the url 
let url = "mongodb://localhost:27017";
const fs = require('fs')
fs.readFile('./call_data.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
     //connect the db
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Connected");
        let db = client.db("mycustom");
        const cust = JSON.parse(jsonString)
        db.collection("mycustom").insertMany(cust,(err,result)=> {
            if(!err){
                console.log("Record inserted successfully")
                console.log(result);
            }else {
                console.log(err);
            }
            client.close();
        })
    }
    else{
        console.log(err);
    }
});





})


