import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { ReportMaster } from '../models/report-master';

@Injectable({
  providedIn: 'root'
})
export class BusDataService {
  constructor(private httpClient:HttpClient) { }

 

  getData():Observable<ReportMaster>{
    let apiUrl:string = '/assets/data/bus-services-data.json';
                          
    const response = this.httpClient.get<ReportMaster>(apiUrl);

    return response;
  }
}
