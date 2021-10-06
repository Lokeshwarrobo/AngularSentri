import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { Servicerequest } from '../models/servicerequest';

@Component({
  selector: 'app-servicerequest',
  templateUrl: './servicerequest.component.html',
  styleUrls: ['./servicerequest.component.css']
})
export class ServicerequestComponent implements OnInit {

  serreq: Servicerequest[];
  constructor(private ser: ServicereqService ) { }

  ngOnInit(): void {
    this.getServiceRequest();
  }

  getServiceRequest(){
    this.ser.getAllServiceReqList().subscribe(
      data => {this.serreq=data;}
    )
  };

}
