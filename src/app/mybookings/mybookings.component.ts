import { Component, OnInit } from '@angular/core';
import { ConferenceBooking } from '../models/conference-booking';
import { ServicereqService } from '../servicereq.service';


@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  allbooking: ConferenceBooking[];

  constructor(private conferencebookingserve: ServicereqService ) { }

  ngOnInit(): void {
    this.getAllBookings();
  }
 

  getAllBookings(){
    this.conferencebookingserve.GetAllBooking().subscribe(
      data =>{this.allbooking = data}
    )
  }

}