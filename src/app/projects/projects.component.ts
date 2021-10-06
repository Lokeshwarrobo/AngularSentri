import { Component, OnInit } from '@angular/core';
import { Projects } from '../models/projects';
import { ServicereqService } from '../servicereq.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project:Projects[];
  constructor(private ser: ServicereqService) { }

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject() {
    this.ser.getAllProjects().subscribe(
      data => {this.project = data}
    )
  }

}
