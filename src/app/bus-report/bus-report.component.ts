import { Component, OnInit } from '@angular/core';
import { Organisation } from '../models/organisation';
import { BusDataService } from '../services/bus-data.service';
import { BusReportGeneratorService } from '../services/bus-report-generator.service';
import { Observable } from '../../../node_modules/rxjs';
import { ReportMaster } from '../models/report-master';

@Component({
  selector: 'app-bus-report',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.css']
})
export class BusReportComponent implements OnInit {

  orgs: Organisation[];
  constructor(private busDataService:BusDataService, private busReportGenerator :  BusReportGeneratorService){
    
  }

  ngOnInit() {
    
    //this.loadBusData();
    
  } 

  loadBusData():Observable<ReportMaster>{
    const ob = this.busDataService.getData();
    ob.subscribe(
      data =>{
        this.busReportGenerator.generateReport(data);
        this.orgs = data.data;
      });
      return ob;
  }

}
