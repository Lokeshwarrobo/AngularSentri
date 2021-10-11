import { Component, OnInit } from '@angular/core';
import { Myteamincidents } from '../models/myteamincidents';
import { ServicereqService } from '../servicereq.service';
@Component({
  selector: 'app-disciplinary',
  templateUrl: './disciplinary.component.html',
  styleUrls: ['./disciplinary.component.css']
})
export class DisciplinaryComponent implements OnInit {

  myteamincidents: Myteamincidents[] = [];

  constructor(private myteamincidentsService: ServicereqService) { }

  ngOnInit(): void {

     this.myteamincidentsService.getMyIncidents().subscribe((data:Myteamincidents[])=>{
      console.log(data);
      this.myteamincidents=data;
     })

  }

}