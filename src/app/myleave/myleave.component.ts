import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { EmployeeLeave } from '../models/employee-leave';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-myleave',
  templateUrl: './myleave.component.html',
  styleUrls: ['./myleave.component.css']
})
export class MyleaveComponent implements OnInit {

  empleave: EmployeeLeave[];
  allresult:any;
  pendingresult:any;
  cancelledresult:any;
  approvedleaves:any;
  rejectedleaves:any;

  constructor(private ser:ServicereqService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllLeave();
    this.getAllCount();
    this.getPendingCount();
    this.getCancelledCount();
    this.getApprovedCount();
    this.getRejectedCount();

  }

  getAllLeave() {
    this.ser.getAllEmpLeaves().subscribe(
      data => {this.empleave = data}
    )
  }

  getAllCount() {
    this.http.get("http://3.7.175.86:8090/count/allleavescount").subscribe((result)=>{
      this.allresult = result
    })
    console.log(this.allresult);
  }

  getPendingCount() {
  this.http.get("http://3.7.175.86:8090/count/penleavescount").subscribe((result)=>{
        this.pendingresult = result
      })
  }


  getCancelledCount() {
    this.http.get("http://3.7.175.86:8090/count/canleavescount").subscribe((result)=>{
      this.cancelledresult = result
    })
  }

  getApprovedCount() {
    this.http.get("http://3.7.175.86:8090/count/appleavescount").subscribe((result)=>{
      this.approvedleaves = result
    })
  }

  getRejectedCount() {
    this.http.get("http://3.7.175.86:8090/count/rejleavescount").subscribe((result)=>{
      this.rejectedleaves = result
    })

  }

}
