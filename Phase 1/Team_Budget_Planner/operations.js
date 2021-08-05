
function addData() {
    // alert("Event fired...")
    //This code create p tag 
    
    var clientname = document.getElementById("cname").value;
    var projectName = document.getElementById("pname").value;
    var budjet = document.getElementById("bud").value;
    
    const localStg = localStorage.getItem('myArray');
    let myArray;
    if (localStg===null){
        myArray=[];
     }
    else{
         myArray = JSON.parse(localStg);
     }
    let emp = {"ccname":clientname,"ppname":projectName,"bbname":budjet};
    myArray.push(emp);
    localStorage.setItem('myArray',JSON.stringify(myArray));
    let abc = localStorage.getItem("myArray");

    //emp = emp.JSON.stringify(emp);
    //arr.push(emp);
    //sessionStorage.setItem("Hold", arr);

    console.log(abc);
    //var myPTagContent = document.createTextNode(cname + pname + bud); 
    
    //console.log(sessionStorage.getElementById(hold));


 }
 function displayData() {
    let empObj = localStorage.getItem("myArray");
    let empJson = JSON.parse(empObj)
    var tableContent=""
    
    var startTable ="<table border=1><tr><th>ClientName</th><th>ProjectName</th><th>Budjet</th></tr>"
    
    tableContent ="<tr><td>"+empJson.id+"</td><td>"+empJson.name+"</td><td>"+empJson.age+"</td></tr>"
    var i = 0;
    while(i < empJson.length)
    {
        tableContent += "<tr><td>"+empJson[i].ccname+"</td><td>"+empJson[i].ppname
        +"</td><td>"+empJson[i].bbname+"</td><tr>";
        i++;
    }
    var total;
    for(j=0;j<=empJson.length)
    {
        total += empJson[j].bbname
    }
    
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("main").innerHTML=tableContent;
}
 