import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { } //DI for HttpClient 

  // post method take 2 parameter 
  // 1st parameter url and 2nd parameter data in json format. 
  storeCustomerInfo(customer:Customer):Observable<any>{
    return this.http.post<any>("http://localhost:9090/storeCustomerInfo",customer);
  }

  // call get method can convert all json data into customer array object. 
  retrieveAllCustomerInfo():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:9090/allCustomerDetails");
  }
 
  deleteCustomerInfo(taskid:any):Observable<any> {
    console.log(taskid);
    return this.http.delete<any>("http://localhost:9090/deleteCustomerInfo/"+taskid);
  }
}

