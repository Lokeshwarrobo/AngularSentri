import { Component, OnInit } from '@angular/core';
import { Myappraisalhistory } from '../models/myappraisalhistory';
import { ServicereqService } from '../servicereq.service';
@Component({
  selector: 'app-appraisalhistory',
  templateUrl: './appraisalhistory.component.html',
  styleUrls: ['./appraisalhistory.component.css']
})
export class AppraisalhistoryComponent implements OnInit {

  myappraisal:Myappraisalhistory[];

  constructor(private serv: ServicereqService) { }

  ngOnInit(): void {
    this.getDeatils();
  }

  getDeatils(){
    this.serv.getMyAppraisalHistorydetails(). 
    subscribe(data => {this.myappraisal =data;})

  }

}
