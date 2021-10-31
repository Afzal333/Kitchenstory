import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 register=new Register();
 save(registerForm:NgForm)
 {
   console.log(registerForm);
  console.log(JSON.stringify(registerForm.value));;
  alert("Registration sucess");
  
 }
 


}
