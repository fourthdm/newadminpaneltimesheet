import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-empteamroles',
  templateUrl: './empteamroles.component.html',
  styleUrls: ['./empteamroles.component.css']
})
export class EmpteamrolesComponent implements OnInit {

  Addform: FormGroup;
  Editform: FormGroup;

  Alldata: any[] = [];
  Allteam: any[] = [];
  Alluserlevel: any[] = [];
  AllEmployee: any[] = [];

  Selecteddata: any = null;

  constructor(private _rest: RestService) {
    this.Addform = new FormGroup({
      emp_id: new FormControl('', [Validators.required]),
      userlevel_id: new FormControl('', [Validators.required]),
      team_id: new FormControl('', [Validators.required])
    });

    this.Editform = new FormGroup({
      id: new FormControl(''),
      emp_id: new FormControl('', [Validators.required]),
      userlevel_id: new FormControl('', [Validators.required]),
      team_id: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.Allteamrole();
    this.Allemployee();
    this.AllTeam();
    this.AllUserlevel();
  }

  Allemployee() {
    this._rest.Allemployee().subscribe((data: any) => {
      this.AllEmployee = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  AllTeam() {
    this._rest.AllTeam().subscribe((data: any) => {
      this.Allteam = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  AllUserlevel() {
    this._rest.Alluserlevel().subscribe((data: any) => {
      this.Alluserlevel = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  Allteamrole() {
    this._rest.Alldatabyteam().subscribe((data: any) => {
      this.Alldata = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  Addteamrole() {
    this._rest.AddTeamrole(this.Addform.value).subscribe((data: any) => {
      this.Alldata.push(data);
      this.Addform.reset();
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  editTeamrole(id: number) {
    const Selectedteam = this.Alldata.find(teams => teams.id === id);
    if (Selectedteam) {
      this.Selecteddata = 1;
      this.Editform.patchValue(Selectedteam);
    } else {
      console.log(`Employeeteam with ID ${id} not found.`);
    }
  }

  updateTeamrole() {
    this._rest.UpdateTeamrole(this.Editform.value).subscribe((data: any) => {
      this.Allteamrole()
      this.Editform.reset();
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  DeleteTeamrole(id: number) {
    this._rest.DeleteTeamrole(id).subscribe((data: any) => {
      this.Allteamrole();
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

}