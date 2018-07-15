import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BusDataService } from './services/bus-data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { AppRoutingModule } from './/app-routing.module';
import { BusReportComponent } from './bus-report/bus-report.component';
import { BusDataComponent } from './bus-data/bus-data.component';
import { MatExpansionModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatDividerModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganisationComponent,
    BusReportComponent,
    BusDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatTableModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [BusDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
