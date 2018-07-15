import { Injectable } from '@angular/core';
import { ReportMaster } from '../models/report-master';
import { BusData } from '../models/bus-data';

@Injectable({
  providedIn: 'root'
})
export class BusReportGeneratorService {

  constructor() { }
  
  generateReport(reportData: ReportMaster){
    let index =0 ;
    reportData.data.forEach(org=>
   {
   org.displayIndex = index++;
    org.busData.forEach(busData => {
      this.processRouteVariant(busData);
      this.processStatus(busData);
    });
  });
}

private processStatus(busData:BusData):void{
  if(busData.deviationFromTimetable == null){
    busData.status = 'Unknown';
    busData.color ='Gray';
   }
  else if(busData.deviationFromTimetable < 0){
    busData.status = 'Early';
    busData.color ='Blue';
  }
  else if(busData.deviationFromTimetable >= 300 ){
    busData.status = 'Late';
    busData.color ='Red';
  }
  else{
    busData.status = 'On Time';
    busData.color ='Green';
  }
}

private processRouteVariant(busData: BusData):void{
  if(!busData.routeVariant){
    busData.routePart1 = '';
    busData.routePart2  = '';
    return;
  }
  const routeSplit = busData.routeVariant.split(' ');
  if(routeSplit.length > 0){
    busData.routePart1 = routeSplit[0];
  }
  else{
    busData.routePart1 = '';
  }

  if(routeSplit.length > 2){
    busData.routePart2 = routeSplit[1] + ' ' + routeSplit[2];
  }
  else{
    busData.routePart2  = '';
  }
}

}
    
  


