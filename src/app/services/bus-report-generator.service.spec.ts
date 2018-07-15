import { TestBed, inject } from '@angular/core/testing';

import { BusReportGeneratorService } from './bus-report-generator.service';
import { ReportMaster } from '../models/report-master';
import { Organisation } from '../models/organisation';
import { BusData } from '../models/bus-data';

describe('BusReportGeneratorService', () => {
  
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [BusReportGeneratorService]
    });

  });

  it('should be created', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    expect(service).toBeTruthy();
  }));

  it('should generate bus report with routeVariant split with Unknown', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    const reportData = new ReportMaster();
    const bus = new BusData();
    const organisation = new Organisation();
    reportData.data = [organisation];
    organisation.busData = [bus];
    bus.routeVariant = 'UNKNOWN';

    service.generateReport(reportData);
    
    expect(bus.routePart1).toBe('UNKNOWN');
    expect(bus.routePart2).toBe('');
    
  }));

  it('should generate bus report with routeVariant split with valid values', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    const reportData = new ReportMaster();
    const bus = new BusData();
    const organisation = new Organisation();
    reportData.data = [organisation];
    organisation.busData = [bus];
    bus.routeVariant = '891 1 2';

    service.generateReport(reportData);
    
    expect(bus.routePart1).toBe('891');
    
    expect(bus.routePart2).toBe('1 2');
  }));

  it('should generate bus report with routeVariant split when Undefined', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    const reportData = new ReportMaster();
    const bus = new BusData();
    const organisation = new Organisation();
    reportData.data = [organisation];
    organisation.busData = [bus];

    service.generateReport(reportData);
    
    expect(bus.routePart1).toBe('');
    expect(bus.routePart2).toBe('');
    
  }));

  it('should generate bus report with routeVariant split when empty values', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    const reportData = new ReportMaster();
    const bus = new BusData();
    const organisation = new Organisation();
    reportData.data = [organisation];
    organisation.busData = [bus];
    bus.routeVariant = '';
    service.generateReport(reportData);
    
    expect(bus.routePart1).toBe('');
    expect(bus.routePart2).toBe('');
    
  }));

  it('should generate bus report with deviationFromTimetable is null', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    const reportData = new ReportMaster();
    const bus = new BusData();
    const organisation = new Organisation();
    reportData.data = [organisation];
    organisation.busData = [bus];
    bus.deviationFromTimetable = null;

    service.generateReport(reportData);
    
    expect(bus.status).toBe('Unknown');
    expect(bus.color).toBe('Gray');
    
  }));

  it('should generate bus report with deviationFromTimetable is 0', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    const reportData = new ReportMaster();
    const bus = new BusData();
    const organisation = new Organisation();
    reportData.data = [organisation];
    organisation.busData = [bus];
    bus.deviationFromTimetable = 0;

    service.generateReport(reportData);
    
    expect(bus.status).toBe('On Time');
    expect(bus.color).toBe('Green');
    
  }));

  it('should generate bus report with deviationFromTimetable is greater than 300', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    const reportData = new ReportMaster();
    const bus = new BusData();
    const organisation = new Organisation();
    reportData.data = [organisation];
    organisation.busData = [bus];
    bus.deviationFromTimetable = 350;

    service.generateReport(reportData);
    
    expect(bus.status).toBe('Late');
    expect(bus.color).toBe('Red');
    
  }));

  it('should generate bus report with deviationFromTimetable is less than 0', inject([BusReportGeneratorService], (service: BusReportGeneratorService) => {
    const reportData = new ReportMaster();
    const bus = new BusData();
    const organisation = new Organisation();
    reportData.data = [organisation];
    organisation.busData = [bus];
    bus.deviationFromTimetable = -10;

    service.generateReport(reportData);
    
    expect(bus.status).toBe('Early');
    expect(bus.color).toBe('Blue');
    
  }));

});

    // bus1.deviationFromTimetable = null;
    
    // bus2.deviationFromTimetable = -1;

    // bus3.deviationFromTimetable = 100;
    
    // bus4.deviationFromTimetable = 350;
    
   