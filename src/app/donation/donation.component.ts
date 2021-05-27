import { Component, OnInit } from '@angular/core';
import { MailServiceApiService } from "../mail-service-api.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { InboxService } from "../modal/inbox-service";


@Component({
  selector: 'app-events',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})

export class DonationComponent implements OnInit {

  inboxServiceForm : FormGroup;

  mailServiceBody : InboxService;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  
  constructor(private mailService : MailServiceApiService, private fb: FormBuilder) { 
    this.createForm();
  }

  

  ngOnInit(): void {
    
  }

  createForm() {
    this.inboxServiceForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(this.mobnumPattern)]),
    message: new FormControl('', [Validators.minLength(50)])
    });
  }

 // get f() { return this.inboxServiceForm.controls; }

  public onSubmit(){
   // this.submitted = true;
    if (this.inboxServiceForm.invalid) {
      return;
  }
    var mailBodyToSend = new InboxService();
    mailBodyToSend.name = this.inboxServiceForm.controls['name'].value;
    mailBodyToSend.emailId = this.inboxServiceForm.controls['email'].value;
    mailBodyToSend.phoneNumber = this.inboxServiceForm.controls['contact'].value;
    mailBodyToSend.message = this.inboxServiceForm.controls['message'].value;
    mailBodyToSend.age = 0;
    mailBodyToSend.domain = 'donation';
  
    this.mailService.pushEmail(mailBodyToSend)
    .subscribe(
      data =>{
        this.mailServiceBody = data;
      }
      );
    
  }

}
