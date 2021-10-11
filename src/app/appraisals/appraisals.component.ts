import { Component, OnInit } from '@angular/core';
import { Managerappraisal } from '../models/managerappraisal';
import { ServicereqService } from '../servicereq.service';

@Component({
  selector: 'app-appraisals',
  templateUrl: './appraisals.component.html',
  styleUrls: ['./appraisals.component.css']
})
export class AppraisalsComponent implements OnInit {
  mangerDetails:Managerappraisal[];
  constructor(private serv: ServicereqService) { }

  ngOnInit(): void { 
    this.getDeatils();
  }

  getDeatils(){
    this.serv.getManagerAppraisaldetails(). 
    subscribe(data => {this.mangerDetails =data;})

  }
}
