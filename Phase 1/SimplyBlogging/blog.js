
function addBlog() {

    var title = document.getElementById("title").value;
    var articles = document.getElementById("articles").value;
    var image = document.getElementById("addImage").value;
    var newDiv = document.createElement('div');
    newDiv.classList = "card"
    
    var postString = "<div style= ><img src="+image+" style="+"width:100px;height:100px;"+"><div class="+"container"+
    "><h4><b>"+title+"</b></h4><p>"+articles+"</p></div></div>";
    document.getElementById("rowid").innerHTML += postString;
}
