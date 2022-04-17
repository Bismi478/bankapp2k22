import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   //database
   database:any={
    1000:{acno:1000,uname:"Manu",password:1000,balance:5000},
    1001:{acno:1001,uname:"Madhav",password:1001,balance:3000},
    1002:{acno:1002,uname:"Rins",password:1002,balance:4000},
  }

  constructor() { }

  //register -RrgisterComponent will give uname,accno,pswd
  register(uname:any,accno:any,pswd:any){

    let database = this.database

    if(accno in database){
      //already exist acno
      return false

    }else{
      // add details into db
      database[accno]={
        accno,
        uname,
        pswd,
        balance:0
      }
      return true
    }
  }
}
