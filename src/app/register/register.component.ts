import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  accno=""
  pswd=""


  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    
    var accno =this.accno
    var pswd = this.pswd
    var uname = this.uname
    const result = this.db.register(uname, accno, pswd)
    if(result)
    {
      alert("Successfully registered")
      this.router.navigateByUrl("")
    }else{
      alert("account already exist..Please Log In")
    }

  }

}
