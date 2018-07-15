import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusReportComponent } from './bus-report.component';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { HttpClientTestingModule, HttpTestingController } from '../../../node_modules/@angular/common/http/testing';
import { OrganisationComponent } from '../organisation/organisation.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';
import { BusDataService } from '../services/bus-data.service';
import { BusReportGeneratorService } from '../services/bus-report-generator.service';

describe('BusReportComponent', () => {
  let component: BusReportComponent;
  let fixture: ComponentFixture<BusReportComponent>;
  let dataService: BusDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [BusDataService, BusReportGeneratorService],
      declarations: [ BusReportComponent, OrganisationComponent ],
      imports: [MatExpansionModule, HttpClientTestingModule, MatFormFieldModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatTableModule]
    })
    .compileComponents();
    dataService = TestBed.get(BusDataService);
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
