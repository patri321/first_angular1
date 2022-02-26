import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../Models/customer';

@Component({
    selector:'customer',
    templateUrl: './customer.component.html'
})
export class CustomerComponent {
   Customers: Array<Customer>;
   IsAddNew:boolean;
  FirstName:string;
  LastName:string;
  @ViewChild('myform') 
  CustomerForm!:NgForm
   constructor() {
    this.IsAddNew=false;
    this.FirstName="";
    this.LastName="";
       this.Customers= new  Array<Customer>();
       this.Customers.push(new Customer(" sukesh"," marla"));
       this.Customers.push(new Customer("Just"," compile"));
       this.Customers.push(new Customer("Ram","Lakhan"));
   }  
   Reset(){

    this.CustomerForm.reset();
  }
  Save()
  {
    this.Customers.push(new Customer(this.FirstName,this.LastName));
    this.IsAddNew=false;
    this.Reset();
  }
  Cancel() {
    this.IsAddNew=false;
    this.Reset();
  }
  AddNew()
  {
      this.IsAddNew=true;
  }

}