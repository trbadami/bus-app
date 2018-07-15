import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { HomeComponent } from './home/home.component';
import { BusReportComponent } from './bus-report/bus-report.component';

export const routes: Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'bus-report',component:BusReportComponent}
  ];
  
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[
      RouterModule
    ]
    
  })
export class AppRoutingModule { }
