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
import { ConferenceBooking } from './models/conference-booking';
import { Myteamincidents } from './models/myteamincidents';
import { Onlyteamincidents } from './models/onlyteamincidents';
import { Trip } from './models/trip';
import { Expenses } from './models/expenses';
import { OrganizationInfo } from './models/organization-info';
import { BusinessUnits } from './models/business-units';
import { Departments } from './models/departments';
import { Announcements } from './models/announcements';
import { Managerappraisal } from './models/managerappraisal';
import { Teamappraisalhistory } from './models/teamappraisalhistory';
import { Myappraisalhistory } from './models/myappraisalhistory';
import { InitiateStatus } from './models/initiate-status';

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

  //Get ALl Conference Bookings
  GetAllBooking():Observable<ConferenceBooking[]>{
    return this.http.get<ConferenceBooking[]>(`${this.baseurl}/conferencebooking/allbookings`)
  }

  //Get My incidents
  getMyIncidents(): Observable<Myteamincidents[]>{
    return this.http.get<Myteamincidents[]>(`${this.baseurl}/api/myincidents`)
  }

  //Get team incidents
  getTeamIncidents(): Observable<Onlyteamincidents[]>{
    return this.http.get<Onlyteamincidents[]>(`${this.baseurl}/api/teamincidents`);
  }

  //Get all trip details
  getTrip():Observable<Trip[]>{
    return this.http.get<Trip[]>(`${this.baseurl}/trips/tripdetails`)
  }

  //get all Expenses
  getExpenses():Observable<Expenses[]>{
    return this.http.get<Expenses[]>(`${this.baseurl}/expense/details`)
  }

  //Get all OrganisationInfo
  getAllinfo():Observable<OrganizationInfo[]>{ 
    return this.http.get<OrganizationInfo[]>(`${this.baseurl}/organ/orgdetails`) 
  } 
  
  //Get all Details of BusinessUnits
  getAllbusi():Observable<BusinessUnits[]>{ 
    return this.http.get<BusinessUnits[]>(`${this.baseurl}/organ/busdetails`) 
  } 

  //Get all Departments
  getAlldep():Observable<Departments[]>{ 
    return this.http.get<Departments[]>(`${this.baseurl}/organ/depdetails`) 
  } 

  //Get All Announments
  getAllann():Observable<Announcements[]>{ 
    return this.http.get<Announcements[]>(`${this.baseurl}/organ/anndetails`) 
  }

  //Getting all Details of ManagerAppraisal
  getManagerAppraisaldetails():Observable<Managerappraisal[]>{
    return this.http.get<Managerappraisal[]>(`${this.baseurl}/api/managerappraisal`)
  }

  //Getting all Details of TeamAppraisalHistory
  getTeamAppraisalHistorydetails():Observable<Teamappraisalhistory[]>{
     return this.http.get<Teamappraisalhistory[]>(`${this.baseurl}/api/teamappraisalhistory`)
  }
  
   //Getting all Details of Myappraisalhistory
   getMyAppraisalHistorydetails():Observable<Myappraisalhistory[]>{
     return this.http.get<Myappraisalhistory[]>(`${this.baseurl}/api/myappraisalhistory`)
    }

    //Get all initiate Status details
    getInitiateStatus():Observable<InitiateStatus[]>{
      return this.http.get<InitiateStatus[]>(`${this.baseUrl}/initiate`)
    }


}
