import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicereqService } from '../servicereq.service';
import { Myskills } from '../models/myskills';
@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent implements OnInit {
  
  skilllist: Myskills[];

  constructor(private myskillserve:ServicereqService ) { }

  ngOnInit(): void {
    this.getAllSkills();
  }

  getAllSkills() {
    this.myskillserve.getMyskills().subscribe(
      data => {this.skilllist = data;}
    )
  };
}
