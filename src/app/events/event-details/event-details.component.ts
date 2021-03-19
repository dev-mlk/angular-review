import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  event: { id: number; name: string; date: string; time: string; price: number; imageUrl: string; location: { address: string; city: string; country: string; }; };

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  // tslint:disable-next-line:typedef
    this.event = this.eventService.takEvent(+this.route.snapshot.params.id);
  }

}
