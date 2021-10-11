import { Component, OnInit } from '@angular/core'; 
import { Announcements } from '../models/announcements'; 
import { ServicereqService } from '../servicereq.service'; 
 
@Component({ 
  selector: 'app-announcements', 
  templateUrl: './announcements.component.html', 
  styleUrls: ['./announcements.component.css'] 
}) 
export class AnnouncementsComponent implements OnInit { 
  ann:Announcements[]; 
 
  constructor(private ser:ServicereqService) { } 
 
  ngOnInit(): void { 
     this.getAnn(); 
  } 
 
  getAnn(){ 
    this.ser.getAllann().subscribe( 
      data=>{this.ann=data} 
    ); 
 
 
  } 
 
}