var i = 0;
const BtnAdd = document.querySelector(".btn-add");
BtnAdd.addEventListener("click", addBlog);
function addBlog() {

    var title = document.getElementById("title").value;
    var articles = document.getElementById("articles").value;
    var image = document.getElementById("addImage").value;
    
    var newDiv = document.createElement('div');
    
    
    var postString = "<div styles: border=2px;>";
    var t = title
    var end ="</div>";
    newDiv.className="col-3";
    newDiv.id= i;
    var xyz = postString+t+end;
    alert(xyz);
    document.getElementById("row").appendChild(newDiv);
    


    document.getElementById("col-3").innerHTML = xyz;
    i = i+1;
    //newDiv.classList.add('div-style')
    //DivContainer.appendChild(newDiv);
    
    

}
