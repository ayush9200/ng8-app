import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LogInApiService } from "../services/log-in-api.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  logInServiceForm : FormGroup;
  username : string;
  password : string;
  meassage : any;
  errorFlag : boolean = false;

  passowrdPattern = "^[a-zA-Z0-9]*$";

  constructor(private fb : FormBuilder, private logApi : LogInApiService, private router : Router
    ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.logInServiceForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(7)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.passowrdPattern)])
      });
  }

  doLogIn(){
    debugger;
    this.errorFlag = false;
    let resp = this.logApi.login(this.logInServiceForm.controls['username'].value,
            this.logInServiceForm.controls['password'].value);
    resp.subscribe(data =>{
      let response = data;
      if(response == "logIn success"){
        this.router.navigate(['admin-helpdesk']);
        this.logInServiceForm.reset();
      }else{
        this.errorFlag = true; 
      }
    },
    (error) => {
      this.errorFlag = true;
    })
  }

}
