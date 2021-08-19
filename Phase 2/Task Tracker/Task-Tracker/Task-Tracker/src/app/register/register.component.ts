import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveData(loginRef:NgForm){
    let login = loginRef.value;
    let User:String = login.userName;
    User = User.toString();
    let Pass:String = login.password;
    Pass = Pass.toString();
    //if data is empty then create it
    if (localStorage.getItem('user') == null)
    {
      localStorage.setItem('user', '[]');
    }
    if (localStorage.getItem('pass') == null)
    {
      localStorage.setItem('pass', '[]');
    }
    localStorage.setItem('user', JSON.stringify(User));
    localStorage.setItem('pass', JSON.stringify(Pass));
    //console.log(login);
    
    loginRef.reset();
  }

}
