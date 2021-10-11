import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

   tr:Trip[];
  constructor(private ser:ServicereqService) { }

  ngOnInit(): void {

    this.getTrp();
  }
   getTrp(){
     this.ser.getTrip().subscribe(
       data=>(this.tr=data)
     );
   }
}