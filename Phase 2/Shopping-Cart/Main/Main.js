function add1Item() {
    var name = (document.getElementById("name1").value);
    var price = (document.getElementById("price1").value);
    saveData(name, price);
}
function add2Item() {
    var name = (document.getElementById("name2").value);
    var price = (document.getElementById("price2").value);
    saveData(name, price);
}
function add3Item() {
    var name = (document.getElementById("name3").value);
    var price = (document.getElementById("price3").value);
    saveData(name, price);
}
function add4Item() {
    var name = (document.getElementById("name4").value);
    var price = (document.getElementById("price4").value);
    saveData(name, price);
}
function saveData(name, price) {
    //if data is empty then create it
    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }
    //get old day and add to new data
    var old_data = JSON.parse(localStorage.getItem('data'));
    //add on the old data to the string array
    old_data.push(name);
    old_data.push(price);
    //then push the new array to the storage.
    localStorage.setItem('data', JSON.stringify(old_data));
}
