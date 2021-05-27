import { Component } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';
import { EventApiService } from "./event-api.service";
import { Event } from "./modal/event-modal";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgsRevealConfig]
})
export class AppComponent {
  title = 'Pass Society';
  constructor(config: NgsRevealConfig, private router: Router) {
    // customize default values of ngx-scrollreveal directives used by this component tree
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

    //other options here
  }
  
  //eventList : EventModal[];

  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
   });
  }
}
