import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { Title } from '@angular/platform-browser';
import { MailServiceApiService } from "../mail-service-api.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { InboxService } from "../modal/inbox-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  col1Config: NgsRevealConfig;

  inboxServiceForm : FormGroup;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  mailServiceBody : InboxService;

  successFlagForMail : Boolean = false;
  errorFlagForMail : Boolean = false;
  

  constructor(private titleService: Title, private mailService : MailServiceApiService, private fb: FormBuilder) {
    this.col1Config = {reset:true};

    this.createForm();
   }

  ngOnInit() {
    
  }

  createForm() {
    this.inboxServiceForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(this.mobnumPattern)]),
    });
  }

  public onSubmit(){
      if (this.inboxServiceForm.invalid) {
       return;
      }
     this.successFlagForMail = false;
     this.errorFlagForMail = false;
     var mailBodyToSend = new InboxService();
     mailBodyToSend.name = this.inboxServiceForm.controls['name'].value;
     mailBodyToSend.emailId = this.inboxServiceForm.controls['email'].value;
     mailBodyToSend.phoneNumber = this.inboxServiceForm.controls['contact'].value;
     mailBodyToSend.message = '';
     mailBodyToSend.age = 0;
     mailBodyToSend.domain = 'home';
      console.log(mailBodyToSend);
     this.mailService.pushEmail(mailBodyToSend)
     .subscribe(
       data =>{
        this.successFlagForMail = true;
       },
      (error) => {
         this.errorFlagForMail = true;
      }
       );
     
   }

}
