import { Component, OnInit, Input } from '@angular/core';
import { Organisation } from '../models/organisation';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})

export class OrganisationComponent implements OnInit {

  @Input() organisation:Organisation;
  
  openIndex : number;
  constructor() { 
    if(!this.organisation){
      this.organisation = new Organisation();
    }
  }

  ngOnInit() {
    
  }

  setActivePanel(orgDisplayIndex:number):void{
    this.openIndex = orgDisplayIndex;
  
  }

  saveNotes():void{
    alert('Following notes have been saved in a blackhole. \n' + this.organisation.comments)
  }



}
