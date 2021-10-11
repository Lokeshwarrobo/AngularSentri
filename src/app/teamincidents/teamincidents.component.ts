import { Component, OnInit } from '@angular/core';
import { Onlyteamincidents } from '../models/onlyteamincidents';
import { ServicereqService } from '../servicereq.service';
@Component({
  selector: 'app-teamincidents',
  templateUrl: './teamincidents.component.html',
  styleUrls: ['./teamincidents.component.css']
})
export class TeamincidentsComponent implements OnInit {

  onlyteamincidents: Onlyteamincidents[]=[];

  constructor(private onlyteamincidentsService: ServicereqService) { }

  ngOnInit(): void {
  
    this.onlyteamincidentsService.getTeamIncidents().subscribe((data:Onlyteamincidents[])=>{
      console.log(data);
      this.onlyteamincidents=data;
    })

  }

}