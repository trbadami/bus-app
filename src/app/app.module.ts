import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { AppRoutingModule } from './/app-routing.module';
import { BusReportComponent } from './bus-report/bus-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganisationComponent,
    BusReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
