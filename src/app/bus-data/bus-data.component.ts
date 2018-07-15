import { Component, OnInit, Input } from '@angular/core';

import { Sort } from '../../../node_modules/@angular/material';
import { BusData } from '../models/bus-data';

@Component({
  selector: 'app-bus-data',
  templateUrl: './bus-data.component.html',
  styleUrls: ['./bus-data.component.css']
})

export class BusDataComponent implements OnInit {

  displayedColumns=['busId','routeVariant','status'];
  
  @Input() busData :BusData[];
  sortedData: BusData[];
  constructor() { }


  ngOnInit() {
    this.sortedData = this.busData.slice();
    
  }

  sortData(sort: Sort) {
    const data = this.busData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'busId': return this.compare(a.busId, b.busId, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
      
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
}

