import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { LoginComponent } from './common/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DraftingjobsComponent } from './pages/draftingjobs/draftingjobs.component';
import { CompletedjobsComponent } from './pages/completedjobs/completedjobs.component';
import { OrderedjobsComponent } from './pages/orderedjobs/orderedjobs.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ViewjobComponent } from './pages/viewjob/viewjob.component';
import { TeamComponent } from './pages/team/team.component';
import { ViewteamComponent } from './pages/viewteam/viewteam.component';
import { ChecklistComponent } from './pages/checklist/checklist.component';
import { UserlevelComponent } from './pages/userlevel/userlevel.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { TimegapComponent } from './pages/timegap/timegap.component';
import { SpokepersonComponent } from './pages/spokeperson/spokeperson.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmpteamrolesComponent } from './pages/empteamroles/empteamroles.component';
import { JobtyesComponent } from './pages/jobtyes/jobtyes.component';
import { EnggtimesComponent } from './pages/enggtimes/enggtimes.component';
import { QctimeComponent } from './pages/qctime/qctime.component';
import { SpokepersonwithempComponent } from './pages/spokepersonwithemp/spokepersonwithemp.component';
import { SpokepersonwithjobComponent } from './pages/spokepersonwithjob/spokepersonwithjob.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    AdminComponent,
    EmployeeComponent,
    DraftingjobsComponent,
    CompletedjobsComponent,
    OrderedjobsComponent,
    JobsComponent,
    ViewjobComponent,
    TeamComponent,
    ViewteamComponent,
    ChecklistComponent,
    UserlevelComponent,
    HomeComponent,
    DashboardComponent,
    TimesheetComponent,
    TimegapComponent,
    SpokepersonComponent,
    EmpteamrolesComponent,
    JobtyesComponent,
    EnggtimesComponent,
    QctimeComponent,
    SpokepersonwithempComponent,
    SpokepersonwithjobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }