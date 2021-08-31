import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //this is getting the values from the user input on the form,
  customerRef = new FormGroup({
    empid:new FormControl(),
    task:new FormControl(),
    taskid:new FormControl(),
    date:new FormControl()
  });
  loginRef = new FormGroup({
    dtaskid:new FormControl()
  })
  //creating 2 variables for the data 
  storeMsg?:string;
  deleteMsg?:string; 
   
  customers:Array<Customer>=[];
  
  flag:boolean = false;
  empid?:number;
  taskid?:number;

  constructor(public custSer:CustomerService) { } // DI for Customer Service 
  // it call automatically after constructor : it call only once 
  ngOnInit(): void {
      console.log("called..")
      this.getAllCustomers();
  }
  storeInfo() {
    let customer = this.customerRef.value;   
    this.custSer.storeCustomerInfo(customer).subscribe(result=>{
      //console.log(result)
      this.storeMsg=result.msg;
         this.getAllCustomers();
    },error=>console.log(error));

    this.customerRef.reset();
  }

  getAllCustomers(){
    this.custSer.retrieveAllCustomerInfo().subscribe(result=> {
        this.customers=result;
    },error=>console.log(error));
  }
  deleteset()
  {
    let login = this.loginRef.value;
    this.deleteRec(login.dtaskid);
  }

  deleteRec(taskid:any){
    //console.log(empid);
    console.log(taskid);
    this.custSer.deleteCustomerInfo(taskid).subscribe(result=>{
      this.deleteMsg=result.msg;
      this.getAllCustomers();
    },error=>console.log(error));
  }
}




