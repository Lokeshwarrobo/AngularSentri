import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { Servicerequest } from '../models/servicerequest';
@Component({
  selector: 'app-closedrequest',
  templateUrl: './closedrequest.component.html',
  styleUrls: ['./closedrequest.component.css']
})
export class ClosedrequestComponent implements OnInit {

  ser:Servicerequest[];
  constructor(private serve:ServicereqService) { }

  ngOnInit(): void {
  }

  getAllByClosed() {
    this.serve.getByClosed().subscribe(
      data => {this.ser = data}
    )
  }
}
