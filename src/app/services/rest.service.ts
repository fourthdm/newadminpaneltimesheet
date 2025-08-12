import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient, private _state: StateService) { }

  url = 'http://localhost:8000';
  // url = 'https://ysurveillance.com/ApiTimesheet';

  EmpolyeeLogin(data: any) {
    return this._http.post(this.url + '/Emplogin', data);
  }

  //Admin APIS only access admin
  AdminLogin(data: any) {
    return this._http.post(this.url + '/Admin_login', data);
  }

  Addadmin(data: any) {
    return this._http.post(this.url + '/Addadmin', data);
  }

  UpdateAdmin(data: any) {
    return this._http.put(this.url + '/UpdateAdmin/' + data.id, data);
  }

  Alladmin() {
    return this._http.get(this.url + '/Alladmin');
  }

  DeleteAdmin(id: any) {
    return this._http.delete(this.url + '/Deleteadmin/' + id);
  }
  //Admin APIS only access admin

  // ChecklistAPi
  Allchecklist() {
    return this._http.get(this.url + '/Allchecklist');
  }

  Addchecklist(data: any) {
    return this._http.post(this.url + '/AddChecklist', data);
  }

  Updatechcklist(data: any) {
    return this._http.put(this.url + '/Updatechecklist/' + data.checklist_id, data);
  }

  Deletechecklist(checklist_id: any) {
    return this._http.delete(this.url + '/Deletechecklist/' + checklist_id);
  }


  // Spoke Person 
  Allspokeperson() {
    return this._http.get(this.url + '/AllSpokeperson');
  }

  Addspokeperson(data: any) {
    return this._http.post(this.url + '/AddSpokePerson', data);
  }

  Updatespokeperson(data: any) {
    return this._http.put(this.url + '/Updatespokeperson/' + data.spoke_person_id, data);
  }

  Deletespokeperson(spoke_person_id: any) {
    return this._http.delete(this.url + '/Deletespokeperson/' + spoke_person_id);
  }

  //employee

  Newapiaddenployee(data: any) {
    return this._http.post(this.url + '/AddFullEmployee', data);
  }

  Addemployee(data: any) {
    // return this._http.post(this.url + '/AddEmployee', data);
    return this._http.post(this.url + '/AddEmp', data);
  }
  // Allemployee() {
  //   return this._http.get(this.url + '/Allempolyeedata');
  // }

  Allemployee() {
    return this._http.get(this.url + '/emp');
  }

  // Updateemployee(data: any) {
  //   return this._http.put(this.url + '/UpdateEmp/' + data.emp_id, data);
  // }

  Updateemployee(emp_id: number, data: any) {
    return this._http.put(this.url + '/UpdateFullEmployee/' + emp_id, data);
  }

  // Updateemployee(data: any) {
  //   return this._http.put(this.url + '/Updateemployee/' + data.emp_id, data);
  // }

  deleteemployee(emp_id: any) {
    return this._http.delete(this.url + '/DeleteFullemployee/' + emp_id);
  }

  // deleteemployee(emp_id: any) {
  //   return this._http.delete(this.url + '/Deleteempolyee/' + emp_id);
  // }

  EmployeeDatabyuserlevelandTeam(data: any) {
    return this._http.post(this.url + '/Allemployeebyuserlevelteam', data);
  }

  TeamEmployee(team: string) {
    return this._http.get(this.url + '/AllEmployeebyTeam/' + team);
  }
  // Api employee end

  // Api jobs start
  AllJobs() {
    return this._http.get(this.url + '/Alljobs');
  }

  Addjob(data: any) {
    return this._http.post(this.url + '/AddJobs', data);
  }

  updatejobs(data: any) {
    return this._http.put(this.url + '/Updatejobs/' + data.job_id, data);
  }

  deletejobs(job_id: any) {
    return this._http.delete(this.url + '/Deletejobs/' + job_id);
  }

  Alljobsbyjobid(job_id: any) {
    return this._http.get(this.url + '/GetJobbyJobid/' + job_id);
  }

  UpdateJObfortotaltimecalculation(job_id: number) {
    return this._http.put(this.url + '/UpdateJObwithtotaltimecalculation/' + job_id, {});
  }

  GetJobsbyDrafterName(data: any) {
    return this._http.post(this.url + '/Jobsbyempid', data);
  }
  // Api jobs end

  // API timesheet start
  Alltimesheet() {
    return this._http.get(this.url + '/Alltimesheet');
  }

  Addtimesheet(data: any) {
    return this._http.post(this.url + '/AddTimesheet', data);
  }

  UpdateTimesheet(data: any) {
    return this._http.put(this.url + '/Updatetimesheet/' + data.timesheet_id, data);
  }

  DeleteTimesheet(timesheet_id: number) {
    return this._http.delete(this.url + '/Deletetimesheet/' + timesheet_id);
  }

  Timesheetbyemp(data: any) {
    return this._http.post(this.url + '/GetTimesheetbyemp', data);
  }

  viewtimesheetbydate(data: any) {
    return this._http.post(this.url + '/GetTimesheetByDate', data);
  }
  // API timesheet Ends

  //API TImegap Start
  Addtimegap(data: any) {
    return this._http.post(this.url + '/Addtimegap', data);
  }

  Alltimegap() {
    return this._http.get(this.url + '/Alltimegap');
  }

  Updatetimegap(data: any) {
    return this._http.put(this.url + '/Updatealltimegap/' + data.timegap_id, data);
  }

  Deletetimegap(timegap_id: number) {
    return this._http.delete(this.url + '/Deletetimegap/' + timegap_id);
  }
  //API TImegap ends
  //API spokeperson Start
  AddSpokeempperson(data: any) {
    return this._http.post(this.url + '/Addspoke_person_emp', data);
  }

  Allspoke_person_emp() {
    return this._http.get(this.url + '/AllEMPloyeespokeperson');
  }

  updateSpokepersonemp(data: any) {
    return this._http.get(this.url + '/Updatespokepersonemp/' + data.spoke_person_emp_id, data);
  }

  DeleteSpokepersonemp(spoke_person_emp_id: any) {
    return this._http.delete(this.url + '/Deletespokepersonemp/' + spoke_person_emp_id);
  }

  SpokePsersonempbyEmp(data: any) {
    return this._http.post(this.url + '/getdatabyemp', data);
  }

  SpokepersonRole(data: any) {
    return this._http.post(this.url + '/getbyrole', data);
  }

  Spokepersonbydate(data: any) {
    return this._http.post(this.url + '/GetbyDatespokeemp', data);
  }
  //API spokeperson ends

  // Allspoke_person_job_type api
  Addspokejobtype(data: any) {
    return this._http.post(this.url + '/Addspoke_person_job_type', data);
  }

  AllSpokejobtypes() {
    return this._http.get(this.url + '/Allspoke_person_job_type');
  }

  Updatespokejobtype(data: any) {
    return this._http.put(this.url + '/Updatespoke_person_job_type/' + data.spoke_person_job_type_id, data);
  }

  DeleteSpokepersonjobtype(spoke_person_job_type_id: any) {
    return this._http.delete(this.url + '/Deletespoke_person_job_type/' + spoke_person_job_type_id);
  }

  GetbyJobtypebySpokepersonid(data: any) {
    return this._http.post(this.url + '/Getspoke_person_job_typebyspokeid', data);
  }
  // Allspoke_person_job_type api

  // All QCtime api 
  Addqctime(data: any) {
    return this._http.post(this.url + '/AddQCtime', data);
  }

  AllQctime() {
    return this._http.get(this.url + '/Allqc_time');
  }

  Updateqctime(data: any) {
    return this._http.put(this.url + '/Updateqc_time/' + data.qc_time_id, data);
  }

  Deleteqctime(qc_time_id: any) {
    return this._http.delete(this.url + '/DeleteQC_time/' + qc_time_id);
  }
  // All QCtime api END

  //ALL Engg_time Start
  Addenggtimes(data: any) {
    return this._http.post(this.url + '/Addenggtime', data);
  }

  Allenggtime() {
    return this._http.get(this.url + '/Allenggtime');
  }

  Updateenggtime(data: any) {
    return this._http.put(this.url + '/Updateenggtime/' + data.engg_time_id, data);
  }

  Deleteenggtime(engg_time_id: number) {
    return this._http.delete(this.url + '/Deleteengg_time/' + engg_time_id);
  }

  Getdatabyenggid(data: any) {
    return this._http.post(this.url + '/Alldatafromid', data);
  }
  //ALL Engg_time End

  //All jobtype start
  AddJobtype(data: any) {
    return this._http.post(this.url + '/Addjobtype', data);
  }

  AllJobtypes() {
    return this._http.get(this.url + '/Alljobtype');
  }

  Updatejobtypes(data: any) {
    return this._http.put(this.url + '/updatejobtype/' + data.job_type_id, data);
  }

  Addenggtimeandqctime(job_id: any) {
    return this._http.get(this.url + '/getJobTotalTime/' + job_id);
  }

  Deletejobtype(job_type_id: number) {
    return this._http.delete(this.url + '/Deletejobtype/' + job_type_id);
  }
  //All jobtype end

  // Alljob_sub_type api start
  addjobsubtype(data: any) {
    return this._http.post(this.url + '/Addjobsubtype', data);
  }

  Updatejobsubtype(data: any) {
    return this._http.put(this.url + '/Updatesubtype/' + data.job_sub_type_id, data);
  }

  AllJobsubtype() {
    return this._http.get(this.url + '/Allsubtypejob');
  }

  Deletejobsubtype(job_sub_type_id: number) {
    return this._http.delete(this.url + '/Deletesubtype/' + job_sub_type_id);
  }

  AllAllsubtypedatabyjobtypeid(data: any) {
    return this._http.post(this.url + '/Allsubtypedatabyjobtypeid', data);
  }
  // Alljob_sub_type api ends

  //All  JobChecklistApi Start
  Addjobchecklist(data: any) {
    return this._http.post(this.url + '/Addjobchecklist', data);
  }

  Updatejobchecklist(data: any) {
    return this._http.put(this.url + '/Updatejobchecklist/' + data.job_checklist_id, data);
  }

  Deletejobchecklist(job_checklist_id: number) {
    return this._http.delete(this.url + '/Deletejobchecklist/' + job_checklist_id);
  }

  Alljobchecklist() {
    return this._http.get(this.url + '/AllJobChecklist');
  }

  Alljobchecklistbyjobid(data: any) {
    return this._http.post(this.url + '/Alljobchecklistfromjobid', data);
  }
  //All jobchecklist ends

  //All userlevel starts
  Alluserlevel() {
    return this._http.get(this.url + '/AllUserlevel');
  }

  Adduserlevel(data: any) {
    return this._http.post(this.url + '/AddUserlevel', data);
  }

  Updateuserlevel(data: any) {
    return this._http.put(this.url + '/Updateuserlevel/' + data.userlevel_id, data);
  }

  Deleteuserlevel(userlevel_id: number) {
    return this._http.delete(this.url + '/Deleteuserlevel/' + userlevel_id);
  }
  //All userlevel ends

  //All Team Starts
  AddTeam(data: any) {
    return this._http.post(this.url + '/AddTeam', data);
  }

  UpdateTeam(data: any) {
    return this._http.put(this.url + '/UpdateTeam/' + data.team_id, data);
  }

  AllTeam() {
    return this._http.get(this.url + '/Teams');
  }

  Deleteteams(team_id: any) {
    return this._http.delete(this.url + '/DeleteTeam/' + team_id);
  }

  //All Team ends

  Teams(team_id: any) {
    return this._http.get(this.url + '/AllTeamrole/' + team_id);
  }

  Alldatabyteam() {
    return this._http.get(this.url + '/ALllteamrole');
  }

  AddTeamrole(data: any) {
    return this._http.post(this.url + '/AddTeamrole', data);
  }

  UpdateTeamrole(data: any) {
    return this._http.put(this.url + '/Updateteamrole/' + data.id, data);
  }

  DeleteTeamrole(id: number) {
    return this._http.delete(this.url + '/deleteempteamrole/' + id);
  }

  QCemployessinfo() {
    return this._http.get(this.url + '/QCemployessinfo');
  }

  AllCoordinatorEmployee() {
    return this._http.get(this.url + '/AllCoordinatorEmployee');
  }

  AllengineerEmployee() {
    return this._http.get(this.url + '/AllEngineerinformation');
  }

} 