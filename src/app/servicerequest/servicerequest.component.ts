import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { Servicerequest } from '../models/servicerequest';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-servicerequest',
  templateUrl: './servicerequest.component.html',
  styleUrls: ['./servicerequest.component.css']
})
export class ServicerequestComponent implements OnInit {

  serreq: Servicerequest[];
  openresult:any;
  closedresult:any;
  rejectedresult:any;
  allresult:any;
  canresult:any;
  constructor(private ser: ServicereqService, private http:HttpClient ) { }

  ngOnInit(): void {
    this.getServiceRequest();
    
    this.getOpenCount();
    this.getAllCout();
    this.getClosedCount();
    this.getRejectedCount();
    this.getCancelledCount();
  }

  getCancelledCount() {
    this.http.get("http://3.7.175.86:8090/count/cancount").subscribe((result)=>{
      this.canresult = result
    })
  }

  getOpenCount() {
    this.http.get("http://3.7.175.86:8090/count/opencount") 
   .subscribe((result)=>{
        this.openresult = result
   })
   
  }

  getClosedCount() {
    this.http.get("http://3.7.175.86:8090/count/closedcount") 
    .subscribe((result)=>{
         this.closedresult = result
    })
  }

  getRejectedCount() {
    this.http.get("http://3.7.175.86:8090/count/rejectedcount") 
    .subscribe((result)=>{
         this.rejectedresult = result
    })
  }

  getAllCout() {
    this.http.get("http://3.7.175.86:8090/count/allcount").subscribe((result)=>{
      this.allresult = result
 })

  }
  getServiceRequest(){
    this.ser.getAllServiceReqList().subscribe(
      data => {this.serreq=data;
        
      }
    )
  };

}
