import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{Admin} from './changepswd';
@Component({
  selector: 'app-changepswd',
  templateUrl: './changepswd.component.html',
  styleUrls: ['./changepswd.component.css']
})
export class ChangepswdComponent implements OnInit {
new_pass:string;
r_new_pass:string;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  admin=new Admin();
  Pass_change(userForm:NgForm){

    if(this.admin.password=='varshini1234')
    {
      if(this.new_pass==this.r_new_pass)
      {
        alert("Admin password changed");
        this.route.navigate(['./admin']);
      }
      else{
        alert("Re-enter password correctly");
      }
    }

    else{
      alert("Enter valid current password");
    }
  }
}
