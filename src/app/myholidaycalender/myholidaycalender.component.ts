import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicereqService } from '../servicereq.service';
import { MyHolidayCalendar } from '../models/my-holiday-calendar';

@Component({
  selector: 'app-myholidaycalender',
  templateUrl: './myholidaycalender.component.html',
  styleUrls: ['./myholidaycalender.component.css']
})
export class MyholidaycalenderComponent implements OnInit {

  mHC:MyHolidayCalendar[];
  constructor(private sr: ServicereqService) { }

  ngOnInit(): void {
    this.getAllHolidays();
  }

  getAllHolidays() {
    this.sr.getAllHolidaysList().subscribe(
      data=>{this.mHC = data}
    )
  }

}
