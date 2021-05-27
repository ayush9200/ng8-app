import { Component, OnInit } from '@angular/core';
import { Event } from "../modal/event-modal";
import { EventApiService } from "../event-api.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { State } from "../modal/state";
import { City } from "../modal/city";
import { Organisation } from "../modal/organisation";
import { Member } from "../modal/member";
import { ImageModal } from "../modal/image-modal";
import { StateApiService } from "../services/state-api.service";
import { CityApiService } from "../services/city-api.service";
import { MemberApiService } from "../services/member-api.service";
import { OrganisationApiService } from "../services/organisation-api.service";
import { FileUploadService } from "../services/file-upload.service";

@Component({
  selector: 'app-admin-helpdesk',
  templateUrl: './admin-helpdesk.component.html',
  styleUrls: ['./admin-helpdesk.component.css']
})
export class AdminHelpdeskComponent implements OnInit {

  successFlag : boolean = false;
  successFlagForImageUpload : boolean = false;

  eventServiceForm : FormGroup;
  memberServiceForm : FormGroup;
  orgServiceForm : FormGroup;

  eventServiceBody : Event;
  memberServiceBody : Member;
  organisationServiceBody : Organisation;

  state : State[] = [];
  city : City[] = [];
  member : Member[] = [];
  org : Organisation[] = [];
  imageList : ImageModal[] = [];
  
  role = [];
  genVal = [];
  statusVal = [];
  orgType = [];

  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

  fileToUpload: File = null;
  fileUploadDomain : string = "";
  imageData: string = "";
  responseRepoId : number = 0;
  

  constructor(private fb : FormBuilder, private eventApi : EventApiService, 
    private stateApi : StateApiService, private cityApi : CityApiService, private memberApi : MemberApiService
    ,private orgApi : OrganisationApiService, private fileUploadApi : FileUploadService) {
    this.getAllStateList();
    this.getAllCityList();
    this.getAllMemberList();
    this.getAllOrgList();
    this.role = this.createRoles();
    this.genVal = this.createGenericValues();
    this.statusVal = this.createStatusValues();
    this.orgType = this.createOrgTypes();
    this.createForm();
    
   }

  ngOnInit(): void {
    
  }

  getAllStateList() {
    this.stateApi.getAllStates().subscribe((data:any) => {
      data.forEach(e => {
        // var cityIn = new City(e);
         this.state.push({
           stateId:e.stateId,
           name : e.name,
           modifiedOn : e.modifiedOn,
           createdOn : e.createdOn,
           country : e.country
         });
     })
    });
  }

  getAllCityList(){
    this.cityApi.getAllCity().subscribe((data:any) => {
      data.forEach(e => {
       // var cityIn = new City(e);
        this.city.push({
          cityId:e.cityId,
          name : e.name
        });
    })
    });
  }

  getAllMemberList(){
    this.memberApi.getAllMembers().subscribe((data:any) => {
      data.forEach(e => {
        this.member.push({
          memberId:e.memberId,
          name : e.name,
          contactNo : e.contactNo,
          emailId : e.emailId,
          address : e.address,
          role : e.role,
          isRegistered  : e.isRegistered,
          isVerified : e.isVerified,
          status : e.status,
          repoId : e.repoId,
          orgId : e.orgId,
          createdOn : e.createdOn,
          modifiedOn : e.modifiedOn,
          url : e.url
        });
    })
    });
  }

  getAllOrgList(){
    this.orgApi.getAllOrganisation().subscribe((data:any) => {
      data.forEach(e => {
        this.org.push({
          orgId:e.orgId,
          name : e.name,
          contactNo : e.contactNo,
          emailId : e.emailId,
          address : e.address,
          repoId : e.repoId,
          createdOn : e.createdOn,
          modifiedOn : e.modifiedOn,
          tinNumber : e.tinNumber,
          contactPerson : e.contactPerson,
          orgType : e.orgType,
          description : e.description,
          url : e.url
        });
    })
    });
  }

  createForm() {
    this.eventServiceForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(30)]),
    gatheringCount: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(this.mobnumPattern)]),
    orgId: new FormControl('', [Validators.required]),
    stateId: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required]),
    memberId: new FormControl('', [Validators.required])
    //dateOfevent: new FormControl('', [Validators.required]),
   // repoId: new FormControl('', [Validators.required]),

    });

    this.memberServiceForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(this.mobnumPattern)]),
      address: new FormControl('', [ Validators.minLength(10)]),
      role: new FormControl('', [ Validators.required]),
      isRegistered : new FormControl('', [ Validators.required]),
	    isVerified : new FormControl('', [ Validators.required]),
	    status : new FormControl('', [ Validators.required]),
      orgId: new FormControl('', [Validators.required]),
      //dateOfevent: new FormControl('', [Validators.required]),
     // repoId: new FormControl('', [Validators.required]),
  
      });

      this.orgServiceForm = this.fb.group({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.email]),
        contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(this.mobnumPattern)]),
        description: new FormControl('', [Validators.required, Validators.minLength(30)]),
        address: new FormControl('', [Validators.required, Validators.minLength(10)]),
        tinNumber: new FormControl('', [Validators.minLength(10)]),
        contactPerson: new FormControl('', [Validators.minLength(3)]),
        orgType: new FormControl('', [Validators.required]),

        //dateOfevent: new FormControl('', [Validators.required]),
       // repoId: new FormControl('', [Validators.required]),
    
        });
  }

  public onSubmitEvent(){
    // this.submitted = true;
    this.successFlag = false;
     if (this.eventServiceForm.invalid) {
       return;
    }
     var eventBodyToSend = new Event();
     eventBodyToSend.name = this.eventServiceForm.controls['name'].value;
     eventBodyToSend.description = this.eventServiceForm.controls['description'].value;
     eventBodyToSend.createdOn = new Date;
     eventBodyToSend.modifiedOn = new Date;
     eventBodyToSend.gatheringCount = this.eventServiceForm.controls['gatheringCount'].value;
     eventBodyToSend.memberId = this.eventServiceForm.controls['memberId'].value;
     eventBodyToSend.orgId = this.eventServiceForm.controls['orgId'].value;
     eventBodyToSend.stateId = this.eventServiceForm.controls['stateId'].value;
     eventBodyToSend.cityId = this.eventServiceForm.controls['cityId'].value;
     eventBodyToSend.contactNo = this.eventServiceForm.controls['contact'].value;
     eventBodyToSend.countryName = 'India';
     eventBodyToSend.dateOfevent = new Date;//this.eventServiceForm.controls['dateOfevent'].value;
     eventBodyToSend.repoId = this.responseRepoId;// this.eventServiceForm.controls['repoId'].value;
     console.log(eventBodyToSend);
    this.eventServiceForm.reset();
    this.eventApi.saveEvent(eventBodyToSend).subscribe(
       data =>{
         this.eventServiceBody = data;
         this.successFlag = true;
       }
      );
    
   }

   public onSubmitMember(){
    this.successFlag = false;
      if (this.memberServiceForm.invalid) {
        return;
      }
   var memberBodyToSend = new Member(); 
   memberBodyToSend.name = this.memberServiceForm.controls['name'].value;
   memberBodyToSend.emailId = this.memberServiceForm.controls['email'].value;
   memberBodyToSend.modifiedOn = new Date;
   memberBodyToSend.createdOn = new Date;
   memberBodyToSend.address = this.memberServiceForm.controls['address'].value;
   memberBodyToSend.role = this.memberServiceForm.controls['role'].value;
   memberBodyToSend.isRegistered = this.memberServiceForm.controls['isRegistered'].value;
   memberBodyToSend.isVerified= this.memberServiceForm.controls['isVerified'].value;
   memberBodyToSend.status = this.memberServiceForm.controls['status'].value;
   memberBodyToSend.orgId = this.memberServiceForm.controls['orgId'].value;
   memberBodyToSend.repoId = String(this.responseRepoId);
   memberBodyToSend.contactNo = this.memberServiceForm.controls['contact'].value;
   console.log(memberBodyToSend);
   this.memberApi.saveMember(memberBodyToSend).subscribe(
      data =>{
        this.memberServiceBody = data;
        this.successFlag = true;
        this.memberServiceForm.reset();
      }
     );
   }

   public onSubmitOrganisation(){
    this.successFlag = false;
      if (this.orgServiceForm.invalid) {
        return;
      }

      var orgBodyToSend = new Organisation();
      orgBodyToSend.name = this.orgServiceForm.controls['name'].value;
      orgBodyToSend.address = this.orgServiceForm.controls['address'].value;
      orgBodyToSend.contactNo = this.orgServiceForm.controls['contact'].value;
      orgBodyToSend.contactPerson = this.orgServiceForm.controls['contactPerson'].value;
      orgBodyToSend.createdOn = new Date;
      orgBodyToSend.modifiedOn = new Date;
      orgBodyToSend.description = this.orgServiceForm.controls['description'].value;
      orgBodyToSend.emailId = this.orgServiceForm.controls['email'].value;
      orgBodyToSend.orgType = this.orgServiceForm.controls['orgType'].value;
      orgBodyToSend.repoId = this.responseRepoId;
      orgBodyToSend.tinNumber = this.orgServiceForm.controls['tinNumber'].value;

      console.log(orgBodyToSend);
      this.orgServiceForm.reset();
      this.orgApi.saveOrganisation(orgBodyToSend).subscribe(
      data =>{
        this.organisationServiceBody = data;
        this.successFlag = true;
      }
     );
    }

    public createRoles() {
      return [
        { roleId: '100', roleName: 'Founder' },
        { roleId: '200', roleName: 'Volunteer' },
        { roleId: '300', roleName: 'Doctor' },
        { roleId: '400', roleName: 'Resident' },
        { roleId: '500', roleName: 'President' },
        { roleId: '600', roleName: 'Administration' },
        { roleId: '700', roleName: 'Publicity' },
        { roleId: '800', roleName: 'Organisor' },
        { roleId: '900', roleName: 'Other' }
      ];
    }

    public createGenericValues() {
      return [
        { genId: '9', genName: 'Yes' },
        { genId: '10', genName: 'No' }
      ];
    }

    public createStatusValues() {
      return [
        { statusId: '7', statusName: 'Active' },
        { statusId: '8', statusName: 'Inactive' }
      ];
    }

    public createOrgTypes() {
      return [
        { typeId: '100', typeName: 'Goverment organisation' },
        { typeId: '200', typeName: 'Private organisation' },
        { typeId: '300', typeName: 'Political organisation' },
        { typeId: '400', typeName: 'Armed Forces' },
        { typeId: '500', typeName: 'Non-profit organisation' },
        { typeId: '600', typeName: 'Educational organisation' },
        { typeId: '700', typeName: 'Individual' },
        { typeId: '800', typeName: 'Other' }
      ];
    }

    public handleFileInput(files: FileList, domainName : string) {
      this.fileToUpload = files.item(0);
      this.fileUploadDomain = domainName;
      this.successFlag = false;
      this.successFlagForImageUpload = false;
      this.responseRepoId = 0;
    }

    public uploadFileToActivity() {
      console.log("File - >", this.fileToUpload, this.fileUploadDomain);
      this.fileUploadApi.uploadFile(this.fileToUpload, this.fileUploadDomain).subscribe((data:any) => {
        debugger;
        this.imageList = [];
        this.imageData = "";
           this.imageList.push({
             name : data.name,
             url : data.url,
             bucket : data.bucket,
             domain : data.domain,
             repoId : data.repoId
           });
        this.imageData = data.url;
        this.responseRepoId = data.repoId;
        console.log("Response : ->", this.imageList);
        this.successFlagForImageUpload = true;
        }, error => {
          console.log(error);
        });
    }


}
