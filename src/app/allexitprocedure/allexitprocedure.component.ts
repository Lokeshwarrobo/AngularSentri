import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { Exitprocedure } from '../models/exitprocedure';

@Component({
  selector: 'app-allexitprocedure',
  templateUrl: './allexitprocedure.component.html',
  styleUrls: ['./allexitprocedure.component.css']
})
export class AllexitprocedureComponent implements OnInit {

  exit:Exitprocedure[];

  constructor(private ser: ServicereqService) { }

  ngOnInit(): void {
    this.getAllProcs();
  }

  getAllProcs(){
    this.ser.getAllExitProcs().subscribe(
      data => {this.exit = data;}
    )
  };
}
