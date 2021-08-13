function showTable()
{
    let data:any = JSON.parse(localStorage.getItem('data'));
    let tableStart = "<table border=5><tr><th>Item Name</th><th>Price</th></tr>"
    let open = "<tr><td>";
    let mid = "</td><td>";
    let close = "</td></tr>";
    let add = "";
    let total = 0;
    let i = 0;
    for(let n in data)
    {
        
        if( i % 2 == 0 )
        {
            add = open+data[n]+mid+data[i+1]+close;
            tableStart = tableStart+add;
        }
        else
        {
            total += Number(data[n]);
        }
        i++;
        
    }
    tableStart = tableStart + "</table>";

    document.getElementById("chart").innerHTML = tableStart;
    document.getElementById("total").innerHTML = total.toString();

}