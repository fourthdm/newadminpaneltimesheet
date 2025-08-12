import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  Allteams: any[] = [];

  TeamAddform: FormGroup;
  EditFormteam: FormGroup;

  TeamSelected: any = null;

  constructor(private _rest: RestService) {

    this.TeamAddform = new FormGroup({
      TeamName: new FormControl('', [Validators.required])
    });

    this.EditFormteam = new FormGroup({
      team_id: new FormControl(''),
      TeamName: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.Allteam();
  }

  Allteam() {
    this._rest.AllTeam().subscribe((data: any) => {
      console.log(data)
      this.Allteams = data.data;
    }, (err: any) => {
      console.log(err)
    })
  }

  AddTeam() {
    this._rest.AddTeam(this.TeamAddform.value).subscribe((data: any) => {
      console.log(data);
      this.Allteams.push(data);
      this.TeamAddform.reset();
      this.Allteam();
    }, (err: any) => {
      console.log(err);
    })
  }

  EditTeam(team_id: number) {
    const SelectTeam = this.Allteams.find(team => team.team_id === team_id);
    if (SelectTeam) {
      this.TeamSelected = 1;
      this.EditFormteam.patchValue(SelectTeam);
    } else {
      console.log(`Team ${team_id} Not Updated..`);
    }
  }

  UpdatedTeam() {
    this._rest.UpdateTeam(this.EditFormteam.value).subscribe((data: any) => {
      console.log(data);
      this.EditFormteam.reset();
      this.Allteam();
    }, (err: any) => {
      console.log(err);
    })
  }

  DeleteTeam(team_id: any) {
    this._rest.Deleteteams(team_id).subscribe((data: any) => {
      console.log(data);
      this.Allteam();
    }, (err: any) => {
      console.log(err);
    })
  }

}
