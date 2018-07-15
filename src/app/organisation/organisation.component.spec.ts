import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationComponent } from './organisation.component';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrganisationComponent', () => {
  let component: OrganisationComponent;
  let fixture: ComponentFixture<OrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationComponent ],
      imports:[MatExpansionModule, MatFormFieldModule, FormsModule, BrowserAnimationsModule, MatInputModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active panel', () => {
    component.setActivePanel(1);
    expect(component.openIndex).toBe(1);
  });

});
