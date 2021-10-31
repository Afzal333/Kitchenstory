import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';
import { Router} from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new Login();
  logins:Login[];
  searchregi:Login[]=[];
  constructor(private route:Router,private loginservice:LoginService) { }
  ngOnInit(): void {
  this.logins=this.loginservice.getUsers();

  }
  save(LoginForm:NgForm)
 {
  let uid=this.login.email;
  let pass=this.login.password;
  let user:Login=this.getUser(uid);
  
  if(uid=="admin@kitchenstory.com")
  {
    if(pass=="admin1234"){
      this.route.navigate(['./admin']);
    }
    else{
      alert('Admin password incorrect');
    }
  }
  else{
    
    if(  user.email==uid)
    {
      if(pass==user.password)
      {
        this.route.navigate(['/items']);
      }
      else{
        alert('Incorrect password');
      }
    }
    
  } 
 }

 
   getUser(uid:string)
  {
    
    

    
    const user=this.logins.find(user=>user.email==uid);
    return user;
   }

}
