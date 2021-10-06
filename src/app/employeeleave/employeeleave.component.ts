import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { EmployeeLeave } from '../models/employee-leave';
@Component({
  selector: 'app-employeeleave',
  templateUrl: './employeeleave.component.html',
  styleUrls: ['./employeeleave.component.css']
})
export class EmployeeleaveComponent implements OnInit {

  emp:EmployeeLeave[];
  constructor(private serve: ServicereqService) { }

  ngOnInit(): void {
    this.getAllEmpLeaves();
  }

  getAllEmpLeaves() {
    this.serve.getAllEmpLeaves().subscribe(
      data => {this.emp = data;}
    )
  };
}
