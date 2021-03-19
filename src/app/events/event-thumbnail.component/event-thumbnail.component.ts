import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;

  @Output() eventClcik = new EventEmitter();

  // someProperty: any = {
  //   id: 1,
  //   name: 'Angular Template variable',
  //   date: new Date(),
  //   host: location.href.toLocaleLowerCase(),
  //   path: location.port,
  //   price: '703 Fcfa'
  // };

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  // handleClickMe(){
  //   this.eventClcik.emit(this.event.host + 'with Emitter event!');
  // }
  // tslint:disable-next-line:typedef
  // logDab(){
  //   console.log('Angular events child to parent!');
  // }
}
