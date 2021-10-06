import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddadvancesComponent } from './addadvances/addadvances.component';
import { AddexpensesComponent } from './addexpenses/addexpenses.component';
import { AddinitiateComponent } from './addinitiate/addinitiate.component';
import { AddmyskillsComponent } from './addmyskills/addmyskills.component';
import { AddtripsComponent } from './addtrips/addtrips.component';
import { AdvancesComponent } from './advances/advances.component';
import { AllexitprocedureComponent } from './allexitprocedure/allexitprocedure.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AppraisalhistoryComponent } from './appraisalhistory/appraisalhistory.component';
import { AppraisalsComponent } from './appraisals/appraisals.component';
import { BusinessunitsComponent } from './businessunits/businessunits.component';
import { CancelledrequestComponent } from './cancelledrequest/cancelledrequest.component';
import { ClosedrequestComponent } from './closedrequest/closedrequest.component';
import { ConferencebookingComponent } from './conferencebooking/conferencebooking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DisciplinaryComponent } from './disciplinary/disciplinary.component';
import { EmployeeadvancesComponent } from './employeeadvances/employeeadvances.component';
import { EmployeebiometricComponent } from './employeebiometric/employeebiometric.component';
import { EmployeeexpensesComponent } from './employeeexpenses/employeeexpenses.component';
import { EmployeeleaveComponent } from './employeeleave/employeeleave.component';
import { EmployeeskillsComponent } from './employeeskills/employeeskills.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FeedforwardComponent } from './feedforward/feedforward.component';
import { HrComponent } from './hr/hr.component';
import { InitiateComponent } from './initiate/initiate.component';
import { ItdeclarationsComponent } from './itdeclarations/itdeclarations.component';
import { LoginComponent } from './login/login.component';
import { MyTeamApraisalComponent } from './my-team-apraisal/my-team-apraisal.component';
import { MybiometrichoursComponent } from './mybiometrichours/mybiometrichours.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { MyholidaycalenderComponent } from './myholidaycalender/myholidaycalender.component';
import { MyleaveComponent } from './myleave/myleave.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyteamComponent } from './myteam/myteam.component';
import { MyteamappraisalhistoryComponent } from './myteamappraisalhistory/myteamappraisalhistory.component';
import { NeedmoreinfoComponent } from './needmoreinfo/needmoreinfo.component';
import { OpenrequestComponent } from './openrequest/openrequest.component';
import { OrganizationComponent } from './organization/organization.component';
import { PayslipsComponent } from './payslips/payslips.component';
import { PolicydocumentsComponent } from './policydocuments/policydocuments.component';
import { ProjectsComponent } from './projects/projects.component';
import { RaiserequestComponent } from './raiserequest/raiserequest.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { RejectedrequestComponent } from './rejectedrequest/rejectedrequest.component';
import { SelfserviceComponent } from './selfservice/selfservice.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { TeamincidentsComponent } from './teamincidents/teamincidents.component';
import { TimeComponent } from './time/time.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'selfservice',component:SelfserviceComponent},
{path:'myleave',component:MyleaveComponent},
{path:'employeeleave',component:EmployeeleaveComponent},
{path:'mybiometrichours',component:MybiometrichoursComponent},
{path:'employeebiometrichours',component:EmployeebiometricComponent},
{path: 'mydetails', component:MydetailsComponent},
{path: 'myholidaycalendar', component:MyholidaycalenderComponent},
{path: 'myteam', component:MyteamComponent},
{path: 'myskills', component:MyskillsComponent},
{path: 'employeeskills', component:EmployeeskillsComponent},
{path: 'addmyskills', component:AddmyskillsComponent},
{path: 'servicerequest', component:ServicerequestComponent},
{path: 'raiserequest', component:RaiserequestComponent},
{path: 'openrequest', component:OpenrequestComponent},
{path: 'closerequest', component:ClosedrequestComponent},
{path: 'rejectrequest', component:RejectedrequestComponent},
{path: 'cancelrequest', component:CancelledrequestComponent},
{path: 'needmoreinfo', component:NeedmoreinfoComponent},
{path: 'hr', component:HrComponent},
{path: 'initiate', component:InitiateComponent},
{path: 'addinitiate', component:AddinitiateComponent},
{path: 'allexitprocedure', component:AllexitprocedureComponent},
{path: 'projects', component:ProjectsComponent},
{path: 'appraisals', component:AppraisalsComponent},
{path: 'myteamapraisal', component: MyTeamApraisalComponent},
{path: 'myteamappraisalhistory', component: MyteamappraisalhistoryComponent},
{path: 'appraisalhistory', component: AppraisalhistoryComponent},
{path: 'feedforward', component: FeedforwardComponent},
{path: 'recruitments', component: RecruitmentsComponent},
{path: 'organization', component: OrganizationComponent },
{path: 'businessunits', component: BusinessunitsComponent},
{path: 'departments', component: DepartmentsComponent},
{path: 'announcements', component: AnnouncementsComponent},
{path: 'policydocuments', component: PolicydocumentsComponent},
{path: 'expenses', component: ExpensesComponent},
{path: 'receipts', component: ReceiptsComponent},
{path: 'trips', component: TripsComponent},
{path: 'advances', component: AdvancesComponent},
{path: 'employeeadvances', component: EmployeeadvancesComponent},
{path: 'employeeexpenses', component: EmployeeexpensesComponent},
{path: 'addexpenses', component: AddexpensesComponent},
{path: 'addtrips', component: AddtripsComponent},
{path: 'addadvances', component: AddadvancesComponent},
{path: 'disciplinary', component: DisciplinaryComponent},
{path: 'teamincidents', component: TeamincidentsComponent},
{path:'conferencebooking', component: ConferencebookingComponent},
{path:'mybookings', component:MybookingsComponent},
{path:'payslips', component:PayslipsComponent},
{path:'time', component:TimeComponent},
{path:'itdeclarations', component:ItdeclarationsComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
