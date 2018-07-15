import { TestBed, inject } from '@angular/core/testing';

import { BusDataService } from './bus-data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ReportMaster } from '../models/report-master';
import { Organisation } from '../models/organisation';


describe('BusDataService', () => {

  let service : BusDataService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusDataService],
      imports:[HttpClientTestingModule]
    });

    service = TestBed.get(BusDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

 afterEach(() =>{
  httpMock.verify();
 });

  it('should be created', (done) => {
    expect(service).toBeTruthy();
    done();
  });

  it('should return json data',  (done) => {
    const reportData = new ReportMaster();
    const organisation = new Organisation();
    organisation.organisation = "NSW Transport";
    reportData.data = [organisation];

    service.getData().subscribe(
      data=>{
        expect(data.data).toBeTruthy();
        expect(data.data[0].organisation).toBe(organisation.organisation);
        done();
      }

    );
    
    const req = httpMock.expectOne('/assets/data/bus-services-data.json');
    req.flush(reportData);
   
  });
});
