import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { EventsAppComponent } from './events-app';
import { EvenListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component/event-thumbnail.component';
import { NavbarComponent } from './events/navbar/navbar.component';

import { EventService } from './events/Shared/event.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EvenListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
