import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { UserlevelComponent } from './pages/userlevel/userlevel.component';
import { ChecklistComponent } from './pages/checklist/checklist.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ViewjobComponent } from './pages/viewjob/viewjob.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { SpokepersonComponent } from './pages/spokeperson/spokeperson.component';
import { TimegapComponent } from './pages/timegap/timegap.component';
import { TeamComponent } from './pages/team/team.component';
import { ViewteamComponent } from './pages/viewteam/viewteam.component';
import { EmpteamrolesComponent } from './pages/empteamroles/empteamroles.component';
import { JobtyesComponent } from './pages/jobtyes/jobtyes.component';
import { EnggtimesComponent } from './pages/enggtimes/enggtimes.component';
import { QctimeComponent } from './pages/qctime/qctime.component';
import { SpokepersonwithempComponent } from './pages/spokepersonwithemp/spokepersonwithemp.component';
import { SpokepersonwithjobComponent } from './pages/spokepersonwithjob/spokepersonwithjob.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent, children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Jobs', component: JobsComponent },
      { path: 'Userlevel', component: UserlevelComponent },
      { path: 'Employee', component: EmployeeComponent },
      { path: 'Checklist', component: ChecklistComponent },
      { path: 'Admin', component: AdminComponent },
      { path: 'Timesheet', component: TimesheetComponent },
      { path: 'Timegap', component: TimegapComponent },
      { path: 'Spoke', component: SpokepersonComponent },
      { path: 'Spokepersonwithemployee', component: SpokepersonwithempComponent },
      { path: 'SpokepersonJobs', component: SpokepersonwithjobComponent },
      { path: 'QcTime', component: QctimeComponent },
      { path: 'EnggTime', component: EnggtimesComponent },
      { path: 'Jobtype', component: JobtyesComponent },
      { path: 'Team', component: TeamComponent },
      { path: 'TeamwithRole', component: EmpteamrolesComponent },
      { path: 'EmployeeTeam', component: EmployeeComponent },
      { path: 'Viewjobs/:job_id', component: ViewjobComponent },
      { path: 'Viewteams/:team_id', component: ViewteamComponent },
      { path: '**', redirectTo: 'Dashboard' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
