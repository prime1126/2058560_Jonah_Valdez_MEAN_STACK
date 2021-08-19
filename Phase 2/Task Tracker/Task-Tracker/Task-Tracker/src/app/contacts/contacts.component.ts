import { Component, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  user?:string = JSON.parse(localStorage.getItem('user') || '{}');
  constructor() { }
 
  ngOnInit(): void {
  }
  testData2(loginRef2:NgForm)
  {
    let login = loginRef2.value;
    let Name:String = login.name;
    Name = Name.toString();

    let ID:String = login.id;
    ID = ID.toString();

    let Task:String = login.id;
    Task = Task.toString();

    let Deadline:String = login.deadline;
    Deadline = Deadline.toString();
    //if data is empty then create it
    if (localStorage.getItem('data') == null)
    {
      localStorage.setItem('data', '[]');
    }
    let old_data = JSON.parse(localStorage.getItem('data') || '{}');
    //add on the old data to the string array
    old_data.push(ID);
    old_data.push(Name);
    old_data.push(Task);
    old_data.push(Deadline);

    localStorage.setItem('data', JSON.stringify(old_data));
  }
    
  showTable()
    {
    let data:any = JSON.parse(localStorage.getItem('data') || '{}');
    let tableStart = "<table border=5><tr><th>Emp Id</th><th>Name</th><th>Task</th><th>Deadline</th></tr>"
    let open = "<tr><td>";
    let mid = "</td><td>";
    let close = "</td></tr>";
    let add = "";
    let i = 0;
    for(let n in data)
    {
      if (i % 4 == 0) {
        add = open + data[n] + mid + data[i + 1] + mid + data[i+2] + mid + data[i+3] + close;
        tableStart = tableStart + add;
      }
      i++;
    }
    tableStart = tableStart + "</table>";

    (<HTMLInputElement>document.getElementById("here")).innerHTML = tableStart;


}

}
