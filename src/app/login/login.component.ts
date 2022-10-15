import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private routers:Router){
  }
  ngOnInit(): void {
    this.signupForm=this.formbuilder.group(
      {
        Email:[''],
        Username:[''],
        Password:['']
      }
        
    )
  }
  signup(){
    this.http.post<any>('http://localhost:3000/user',this.signupForm.value)
    .subscribe(res=>{
      alert("insert")
    })
  }

}

