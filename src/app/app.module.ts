import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelfserviceComponent } from './selfservice/selfservice.component';
import { MyleaveComponent } from './myleave/myleave.component';
import { EmployeeleaveComponent } from './employeeleave/employeeleave.component';
import { MybiometrichoursComponent } from './mybiometrichours/mybiometrichours.component';
import { EmployeebiometricComponent } from './employeebiometric/employeebiometric.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { MyholidaycalenderComponent } from './myholidaycalender/myholidaycalender.component';
import { MyteamComponent } from './myteam/myteam.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { EmployeeskillsComponent } from './employeeskills/employeeskills.component';
import { AddmyskillsComponent } from './addmyskills/addmyskills.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { RaiserequestComponent } from './raiserequest/raiserequest.component';
import { OpenrequestComponent } from './openrequest/openrequest.component';
import { ClosedrequestComponent } from './closedrequest/closedrequest.component';
import { RejectedrequestComponent } from './rejectedrequest/rejectedrequest.component';
import { CancelledrequestComponent } from './cancelledrequest/cancelledrequest.component';
import { NeedmoreinfoComponent } from './needmoreinfo/needmoreinfo.component';
import { HrComponent } from './hr/hr.component';
import { InitiateComponent } from './initiate/initiate.component';
import { AddinitiateComponent } from './addinitiate/addinitiate.component';
import { AllexitprocedureComponent } from './allexitprocedure/allexitprocedure.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppraisalsComponent } from './appraisals/appraisals.component';
import { MyTeamApraisalComponent } from './my-team-apraisal/my-team-apraisal.component';
import { AppraisalhistoryComponent } from './appraisalhistory/appraisalhistory.component';
import { FeedforwardComponent } from './feedforward/feedforward.component';
import { MyteamappraisalhistoryComponent } from './myteamappraisalhistory/myteamappraisalhistory.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { OrganizationComponent } from './organization/organization.component';
import { BusinessunitsComponent } from './businessunits/businessunits.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { PolicydocumentsComponent } from './policydocuments/policydocuments.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { TripsComponent } from './trips/trips.component';
import { AdvancesComponent } from './advances/advances.component';
import { EmployeeadvancesComponent } from './employeeadvances/employeeadvances.component';
import { EmployeeexpensesComponent } from './employeeexpenses/employeeexpenses.component';
import { AddexpensesComponent } from './addexpenses/addexpenses.component';
import { AddtripsComponent } from './addtrips/addtrips.component';
import { AddadvancesComponent } from './addadvances/addadvances.component';
import { DisciplinaryComponent } from './disciplinary/disciplinary.component';
import { TeamincidentsComponent } from './teamincidents/teamincidents.component';
import { ConferencebookingComponent } from './conferencebooking/conferencebooking.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PayslipsComponent } from './payslips/payslips.component';
import { TimeComponent } from './time/time.component';
import { ItdeclarationsComponent } from './itdeclarations/itdeclarations.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SelfserviceComponent,
    MyleaveComponent,
    EmployeeleaveComponent,
    MybiometrichoursComponent,
    EmployeebiometricComponent,
    MydetailsComponent,
    MyholidaycalenderComponent,
    MyteamComponent,
    MyskillsComponent,
    EmployeeskillsComponent,
    AddmyskillsComponent,
    ServicerequestComponent,
    RaiserequestComponent,
    OpenrequestComponent,
    ClosedrequestComponent,
    RejectedrequestComponent,
    CancelledrequestComponent,
    NeedmoreinfoComponent,
    HrComponent,
    InitiateComponent,
    AddinitiateComponent,
    AllexitprocedureComponent,
    ProjectsComponent,
    AppraisalsComponent,
    MyTeamApraisalComponent,
    AppraisalhistoryComponent,
    FeedforwardComponent,
    MyteamappraisalhistoryComponent,
    RecruitmentsComponent,
    OrganizationComponent,
    BusinessunitsComponent,
    DepartmentsComponent,
    AnnouncementsComponent,
    PolicydocumentsComponent,
    ExpensesComponent,
    ReceiptsComponent,
    TripsComponent,
    AdvancesComponent,
    EmployeeadvancesComponent,
    EmployeeexpensesComponent,
    AddexpensesComponent,
    AddtripsComponent,
    AddadvancesComponent,
    DisciplinaryComponent,
    TeamincidentsComponent,
    ConferencebookingComponent,
    MybookingsComponent,
    PayslipsComponent,
    TimeComponent,
    ItdeclarationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
