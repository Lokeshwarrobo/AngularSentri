import { Component, OnInit } from '@angular/core'; 
import { ServicereqService } from '../servicereq.service'; 
import { OrganizationInfo } from '../models/organization-info';
 
@Component({ 
  selector: 'app-organization', 
  templateUrl: './organization.component.html', 
  styleUrls: ['./organization.component.css'] 
}) 
export class OrganizationComponent implements OnInit { 
 
  org:OrganizationInfo[]; 
 
  constructor(private ser:ServicereqService) { } 
 
  ngOnInit(): void { 
    this.getOrg(); 
  } 
 
  getOrg(){ 
    this.ser.getAllinfo().subscribe( 
      data=>{this.org=data} 
    ); 
  } 
 
}