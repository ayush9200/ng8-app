import { Component, OnInit } from '@angular/core';
import { EventApiService } from '../event-api.service';
import { Event } from "../modal/event-modal";
import { Router } from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router : Router, public dataService: EventApiService) { 

  }
  eventList : Event[];
  selectedEvent : Event;

  ngOnInit() {
    this.dataService.getAllEvents()
    .subscribe
    (
      data =>
      {
        this.eventList = data;
      },
      (error) => {
         console.log(error)
      }
    );
  }

  public selectEvent(event){
    this.selectedEvent = event;
  }
  
  public createEvent(){
    
  }

}
