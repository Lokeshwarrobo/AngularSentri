import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Servicerequest } from './models/servicerequest';

import { MyHolidayCalendar } from './models/my-holiday-calendar';
import { Myskills } from './models/myskills';
import { EmployeeLeave } from './models/employee-leave';
import { Exitprocedure } from './models/exitprocedure';
import { Projects } from './models/projects';
import { MyDetails } from './models/my-details';

@Injectable({
  providedIn: 'root'
})
export class ServicereqService {

  private baseurl = 'http://3.7.175.86:8090';
  private baseUrl = 'http://localhost:8080'
  //private baseurl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  // getting all service request list
  getAllServiceReqList():Observable<Servicerequest[]> {
    return this.http.get<Servicerequest[]>(`${this.baseurl}/srl`);
  }

  // getting all holidays list
  getAllHolidaysList():Observable<MyHolidayCalendar[]> {
    return this.http.get<MyHolidayCalendar[]>(`${this.baseurl}/mhc`)
  }

  // Getting all myskills list
  getMyskills(): Observable<Myskills[]>{
    return this.http.get<Myskills[]>(`${this.baseurl}/mssl`)
  }

  //Getting all employeeLeaves
  getAllEmpLeaves():Observable<EmployeeLeave[]>{
    return this.http.get<EmployeeLeave[]>(`${this.baseurl}/leave/details`)
  }

  //Getting all Exit procs
  getAllExitProcs():Observable<Exitprocedure[]>{
    return this.http.get<Exitprocedure[]>(`${this.baseurl}/hr/allexitproc`)
  }

  //Getting all Projects
  getAllProjects():Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.baseurl}/hr/allprojects`)
  }

  //Getting all Details
  getAllDetails():Observable<MyDetails[]> {
    return this.http.get<MyDetails[]>(`${this.baseUrl}/muds`)
  }
  
  getByClosed():Observable<Servicerequest[]> {
    return this.http.get<Servicerequest[]>(`${this.baseurl}/srl/closed`)
  }
  
}
