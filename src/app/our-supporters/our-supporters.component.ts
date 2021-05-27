import { Component, OnInit } from '@angular/core';
import { MemberApiService } from "../services/member-api.service";
import { Member } from "../modal/member";
import { OrganisationApiService } from "../services/organisation-api.service";
import { Organisation } from "../modal/organisation";

@Component({
  selector: 'app-our-supporters',
  templateUrl: './our-supporters.component.html',
  styleUrls: ['./our-supporters.component.css']
})
export class OurSupportersComponent implements OnInit {

  memberList : Member[];
  organisationList : Organisation[];
  constructor(private memberApi : MemberApiService, private organisationApi : OrganisationApiService) { }

  ngOnInit(): void {
    this.memberApi.getAllMembers()
    .subscribe
    (
      data =>
      {
        this.memberList = data;
      }
    );

    this.organisationApi.getAllOrganisation()
    .subscribe
    (
      data =>
      {
        this.organisationList = data;
      }
    );
  }

  

}
