import { Login } from './login';
import {Injectable}  from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService
{
    public users:Login[]=[
        {
            email:"afzalharoon333@gmail.com",
            password:"afzal333"
        },
        {
            email:"azharhamed1995@gmail.com",
            password:"azhar1995"
        },
        {
            email:"mariajabeen2003@gmail.com",
            password:"maria2003"
        }
    ];
    getUsers():Login[]
    {
        return this.users;
    }
    
}