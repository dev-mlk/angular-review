import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // tslint:disable-next-line:typedef
  getEvents() {
    return EVENTS;
  }

  // tslint:disable-next-line:typedef
  takEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
  constructor() { }


}

const EVENTS = [
  {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  },
  {
    id: 2,
    name: 'ng-nl',
    date: '4/15/2037',
    time: '9:00 am',
    price: 950.00,
    imageUrl: '/assets/images/ng-conf3.jpg',
    location: {
      address: 'The NG-NL Convention Center & Scuba Shop',
      city: 'Amsterdam',
      country: 'Netherlands'
    }
  },
  {
    id: 3,
    name: 'ng-conf 2037',
    date: '5/4/2037',
    time: '9:00 am',
    price: 759.00,
    imageUrl: '/assets/images/ng-conf.png',
    location: {
      address: 'The Palatial America Hotel',
      city: 'Salt Lake City',
      country: 'USA'
    }
  },
  {
    id: 4,
    name: 'UN Angular Summit',
    date: '6/10/2037',
    time: '8:00 am',
    price: 800.00,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: 'The UN Angular Center',
      city: 'New York',
      country: 'USA'
    }
  },
  {
    id: 5,
    name: 'ng-vegas',
    date: '2/10/2037',
    time: '9:00 am',
    price: 400.00,
    imageUrl: '/assets/images/angular-other.png',
    location: {
      address: 'The Excalibur',
      city: 'Las Vegas',
      country: 'USA'
    }
  },
  {
    id: 6,
    name: 'ng-camer',
    date: '2/10/1987',
    time: '7:00 am',
    price: 100.00,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: 'The Stolen Government',
      city: 'Yaounde',
      country: 'CMR'
    }
  }
];
