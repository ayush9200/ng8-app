import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PaytmApiService } from "../paytm-api.service";
import { MailServiceApiService } from "../mail-service-api.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { InboxService } from "../modal/inbox-service";

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  inboxServiceForm : FormGroup;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  agePattern = "^(0|[1-9][0-9]*){2}$";

  mailServiceBody : InboxService;

  successFlagForMail : Boolean = false;
  errorFlagForMail : Boolean = false;

  contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

  constructor(public dataService: DataService, public paytmService: PaytmApiService, private mailService : MailServiceApiService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createContact(){
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = {id: null, name: "", description: "", email: ""};

  }

  createForm() {
    this.inboxServiceForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(this.mobnumPattern)]),
      age: new FormControl('', [Validators.pattern(this.agePattern)]),
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
     mailBodyToSend.age = this.inboxServiceForm.controls['age'].value;
     mailBodyToSend.domain = 'join';
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
