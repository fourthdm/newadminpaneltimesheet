import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-viewteam',
  templateUrl: './viewteam.component.html',
  styleUrls: ['./viewteam.component.css']
})
export class ViewteamComponent implements OnInit {
  isAdmin: boolean = false;
  employees: any[] = [];
  userlevel: any[] = [];
  team: any[] = [];

  Addempform: FormGroup;
  // Editempform: FormGroup;
  selctedemp: any = null;

  AllTeamData: any[] = [];

  constructor(private _rest: RestService, private _activeroute: ActivatedRoute, private fb: FormBuilder) {
    this.Addempform = this.fb.group({
      emp_code: new FormControl('', [Validators.required]),
      emp_name: new FormControl('', [Validators.required]),
      emp_email: new FormControl('', [Validators.required]),
      userlevel: this.fb.array([], [Validators.required]),
      team: this.fb.array([], [Validators.required]),
      // team: new FormControl('', [Validators.required]),
      // teamId: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      added_date: new FormControl(''),
      updated_date: new FormControl('')
    })
  }

  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      const team_id = params['team_id'];
      this._rest.Teams(team_id).subscribe((data: any) => {
        this.AllTeamData = data.data;
      }, (err: any) => {
        console.log(err);
      })
    });

    this.getUserlevel();
    this.getTeams();

  }

  getUserlevel() {
    this._rest.Alluserlevel().subscribe((data: any) => {
      this.userlevel = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  getTeams() {
    this._rest.AllTeam().subscribe((data: any) => {
      this.team = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  Addemp() {
    const formValue = this.Addempform.value;
    formValue.userlevel = `${formValue.userlevel.join(', ')}`;
    formValue.team = ` ${formValue.team.join(', ')}`;
    this._rest.Addemployee(formValue).subscribe(
      (result: any) => {
        console.log(result);
        this.employees.push(result);
        // this.getEmployee();
        this.Addempform.reset();
        this.ngOnInit();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  selectedValues: number[] = [];

  isSelected(id: number): boolean {
    return this.selectedValues.includes(id);
  }

  onCheckboxChange(event: any, field: string) {
    const formArray: FormArray = this.Addempform.get(field) as FormArray;
    // const frmArray: FormArray = this.Addempform.get(field) as FormArray;x
    if (event.target.checked) {
      formArray.push(this.fb.control(event.target.value));
      // frmArray.push(this.fb.control(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          // frmArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}