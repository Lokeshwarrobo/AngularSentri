import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { MyDetails } from '../models/my-details';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {
  
  myd:MyDetails[];
  constructor(private serv: ServicereqService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.serv.getAllDetails().subscribe(
      data => { this.myd = data}
    )
  }

}
