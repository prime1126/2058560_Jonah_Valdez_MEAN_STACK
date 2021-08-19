import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  testData(loginRef1:NgForm)
  {
    let login = loginRef1.value;
    let User:String = login.userName;
    let Pass:String = login.password;
    let usr = JSON.parse(localStorage.getItem('user') || '{}');
    let pass:any = JSON.parse(localStorage.getItem('pass') || '{}');
    console.log(User);
    console.log(Pass);
    console.log(usr);
    console.log(pass);
    User = User.toString();
    Pass = Pass.toString();
    usr = usr.toString();
    pass = pass.toString();
    if(User==usr && Pass==pass)
    { 
      this.router.navigate(["contacts"]);
    }
    else 
    {
      console.log("try again");
    }
  }

}
