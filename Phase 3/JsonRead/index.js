const fs = require('fs');
let readline = require("readline-sync");
saveData();

function saveData()
{
    let hold = 0;
    
    let test = readline.question("Would you like to log a file y or n?");
        while(test == "y")
        {

            let first =  readline.question("Please enter your first name");
            let last = readline.question("Please enter your last name");
            let gender = readline.question("Please enter your gender");
            let email = readline.questionEMail("Please enter your email address");

            newObj = {
                FirstName: first,
                LastName: last,
                Gender: gender,
                Email: email
            }
            let tmp = JSON.stringify(newObj);

            if(hold == 0)
            {
                console.log(newObj);
                fs.writeFile('file.json',tmp, err =>{
                    if(err){
                        console.log(err);
                    }
                });
                hold++;
                
            }
            else
            {
                let empJson = "";
                fs.readFile("file.json",(err,data)=> {
                    if(!err){
                        //console.log(data);
                        let empString = data.toString();
                        empJson = JSON.parse(empString);
                        empJson = JSON.stringify(empJson)  + tmp;
                        fs.writeFile('file.json',empJson, err =>{
                            if(err){
                                console.log(err);
                            }
                        });
                    }
                })
                
            }
            

            console.log(hold);
            test = readline.question("Would you like to log a file y or n?");
            
           

        }
}