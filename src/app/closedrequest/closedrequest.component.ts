import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { Servicerequest } from '../models/servicerequest';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-closedrequest',
  templateUrl: './closedrequest.component.html',
  styleUrls: ['./closedrequest.component.css']
})
export class ClosedrequestComponent implements OnInit {

   serl:Servicerequest[]=[];
   openresult:any;
  closedresult:any;
  rejectedresult:any;
  allresult:any;
  canresult:any;
  constructor(private serve:ServicereqService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getClosed();
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

  
  getClosed() {
    this.serve.getAllServiceReqList().subscribe(
      data => {this.serl = data
        console.log(this.serl);
      }
      
    )
  }

}
