import { Routes } from '@angular/router';
import { EvenListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const appRoutes: Routes = [
    {
        path: 'events', component: EvenListComponent,
    },
    {
        path: 'events/:id', component: EventDetailsComponent
    },
    {
        path: '', redirectTo: '/events', pathMatch: 'full'
    }
];
