import { Component, OnInit } from '@angular/core';
import { Teamappraisalhistory } from '../models/teamappraisalhistory';
import { ServicereqService } from '../servicereq.service';
@Component({
  selector: 'app-myteamappraisalhistory',
  templateUrl: './myteamappraisalhistory.component.html',
  styleUrls: ['./myteamappraisalhistory.component.css']
})
export class MyteamappraisalhistoryComponent implements OnInit {
  teamDetails:Teamappraisalhistory[];
  constructor(private serv: ServicereqService) { }

  ngOnInit(): void {
    this.getDeatils();
  }

  getDeatils(){
    this.serv.getTeamAppraisalHistorydetails(). 
    subscribe(data => {this. teamDetails =data;})
 
  }
}
