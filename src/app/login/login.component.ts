import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//varable declaration bfr constr
   
print="hello welcome"

accnm="Account number please!!!"

accno=""

pswd=""


 
  constructor(private router:Router,private ds:DataService) { } //dependency injection for data sharing

  ngOnInit(): void {
  }

  // acnoChange(event:any){
  //   this.accno = event.target.value
  //   console.log(event.target.value);
    
  // }

  // pswdChange(event:any){
  //   this.pswd = event.target.value
  //   console.log(event.target.value);
    
  // } // event binding

  //login using event binding/ two way binding
   login(){
                                                                            
         // user entered acno and pswd
        var accno = this.accno
        console.log(accno);
        
         var pass = this.pswd
         let database = this.ds.database
         if(accno in database){

        if(pass == database[accno]["password"]){

           alert("Login successfull!!! ")
           this.router.navigateByUrl("home")
          }

          else{
             alert("invalid passsword ")
             }
        
         }
         else{
         alert("User does not exist!!! ")
         }
     }
  // login(a:any,p:any){

  //   console.log(a.value);
    
 
  //   // user entered acno and pswd
  //   var accno = a.value
  //   var pass = p.value

  //   let database = this.database

  //   if(accno in database){

  //      if(pass == database[accno]["password"]){

  //         alert("Login successfull!!! ")
  //       }

  //       else{
  //         alert("incorrect passsword ")
  //       }
      
  //   }
  //   else{
  //     alert("User does not exist!!! ")   
  //   }
  // }
}

// "this" indicate - class details point cheyyan  - call by reference