import { Component, OnInit } from '@angular/core'; 
import { ServicereqService } from '../servicereq.service'; 
import { BusinessUnits } from '../models/business-units';
 
@Component({ 
  selector: 'app-businessunits', 
  templateUrl: './businessunits.component.html', 
  styleUrls: ['./businessunits.component.css'] 
}) 
export class BusinessunitsComponent implements OnInit { 
 
  bus:BusinessUnits[]; 
 
  constructor(private ser:ServicereqService) { } 
 
  ngOnInit(): void { 
    this.getBus(); 
  } 
 
  getBus(){ 
    this.ser.getAllbusi().subscribe( 
      data=>{this.bus=data} 
 
    ); 
  } 
 
}