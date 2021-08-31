// load the modules 
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

// create the reference 
let app = express();

//middleware    
app.use(bodyParser.json())          // enable json data from request body 
app.use(cors());                    // enable cors 

let customers = [
]


app.get("/findCustomerById/:taskid",(request,response)=> {
    let taskid = request.params.taskid;
    let customer = customers.find(c=>c.taskid==taskid);
    if(customer==undefined){
        response.json({"msg":"Task not present with id "+taskid})
    }else {
        response.json(customer);
    }
})


app.get("/allCustomerDetails",(request,response)=> {
    response.json(customers);
})


app.post("/storeCustomerInfo",(request,response)=> {
       let cust = request.body;         // in json format. 
       let customer = customers.find(c=>c.taskid==cust.taskid);
       if(customer==undefined){
             customers.push(cust);
        response.json({"msg":"Task Record added sucessfully"})
    }else {
        response.json({"msg":"Task id must be unique "});
    }
})



app.delete("/deleteCustomerInfo/:taskid",(request,response)=> {
        let taskid = request.params.taskid;
        console.log(taskid);
        let index = customers.findIndex(c=>c.taskid==taskid);
        if(index==-1){
            response.json({"msg":"No task present with id "+taskid})
        }else {
            customers.splice(index,1);  // splice(indexposition,deleteCount)
            response.json({"msg":"task deleted successfully"});
        }
})

app.listen(9090,()=>console.log("Server running on port number 9090"));