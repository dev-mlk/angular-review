import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/event.service';

declare var toastr;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EvenListComponent implements OnInit {

  public title = 'Angular Reviews';
  events: any[];
  toastr: any;
  // public toastr;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
  // tslint:disable-next-line:typedef
  handleThumbnailClick(eventName){
    // tslint:disable-next-line:no-unused-expression
    this.toastr.success(eventName);
  }
}
