import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatTableModule, MatToolbarModule, MatButtonModule, MatSortModule } from '@angular/material';
import { BusDataComponent } from './bus-data.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';
import { BusDataService } from '../services/bus-data.service';
import { Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';

describe('BusDataComponent', () => {
  let component: BusDataComponent;
  let fixture: ComponentFixture<BusDataComponent>;
  let dataService: BusDataService;
  
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusDataComponent ],
      imports: [ MatExpansionModule, MatFormFieldModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatTableModule, MatToolbarModule, RouterTestingModule, MatButtonModule, MatSortModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
