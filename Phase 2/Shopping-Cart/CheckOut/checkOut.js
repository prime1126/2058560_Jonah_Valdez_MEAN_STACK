function showTable() {
    var data = JSON.parse(localStorage.getItem('data'));
    var tableStart = "<table border=5><tr><th>Item Name</th><th>Price</th></tr>";
    var open = "<tr><td>";
    var mid = "</td><td>";
    var close = "</td></tr>";
    var add = "";
    var total = 0;
    var i = 0;
    for (var n in data) {
        if (i % 2 == 0) {
            add = open + data[n] + mid + data[i + 1] + close;
            tableStart = tableStart + add;
        }
        else {
            total += Number(data[n]);
        }
        i++;
    }
    tableStart = tableStart + "</table>";
    document.getElementById("chart").innerHTML = tableStart;
    document.getElementById("total").innerHTML = total.toString();
}
