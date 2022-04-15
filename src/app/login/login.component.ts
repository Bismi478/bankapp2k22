import { Component, OnInit } from '@angular/core';

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


  //database
  database:any={
    1000:{acno:1000,uname:"Manu",password:1000,balance:5000},
    1001:{acno:1001,uname:"Madhav",password:1001,balance:3000},
    1002:{acno:1002,uname:"Rins",password:1002,balance:4000},
  }
  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.accno = event.target.value
    console.log(event.target.value);
    
  }

  pswdChange(event:any){
    this.pswd = event.target.value
    console.log(event.target.value);
    
  }

  login(a:any,p:any){

    console.log(a.value);
    
 
    // user entered acno and pswd
    var accno = a.value
    var pass = p.value

    let database = this.database

    if(accno in database){

       if(pass == database[accno]["password"]){

          alert("Login successfull!!! ")
        }

        else{
          alert("incorrect passsword ")
        }
      
    }
    else{
      alert("User does not exist!!! ")   
    }
  }
}

// 1:7:39