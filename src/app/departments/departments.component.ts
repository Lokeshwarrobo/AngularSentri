import { Component, OnInit } from '@angular/core'; 
import { ServicereqService } from '../servicereq.service'; 
import { Departments } from '../models/departments'; 
 
@Component({ 
  selector: 'app-departments', 
  templateUrl: './departments.component.html', 
  styleUrls: ['./departments.component.css'] 
}) 
export class DepartmentsComponent implements OnInit { 
 
  depa:Departments[]; 
   
   
 
  constructor( private ser:ServicereqService) { } 
 
  ngOnInit(): void { 
    this.getDep(); 
  } 
 
  getDep(){ 
    this.ser.getAlldep().subscribe( 
      data=>{this.depa=data} 
    ); 
  } 
 
 
}