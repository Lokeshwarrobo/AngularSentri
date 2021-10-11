import { Component, OnInit } from '@angular/core';
import { InitiateStatus } from '../models/initiate-status';
import { ServicereqService } from '../servicereq.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.component.html',
  styleUrls: ['./initiate.component.css']
})
export class InitiateComponent implements OnInit {

  inits:InitiateStatus[];
  constructor(private req: ServicereqService) { }

  ngOnInit(): void {
    this.getInitiateStatus();
  }

  getInitiateStatus() {
    this.req.getInitiateStatus().subscribe(
      data => {this.inits = data}
    )
  }


}
