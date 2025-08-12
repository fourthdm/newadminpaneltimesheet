import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-spokepersonwithemp',
  templateUrl: './spokepersonwithemp.component.html',
  styleUrls: ['./spokepersonwithemp.component.css']
})
export class SpokepersonwithempComponent implements OnInit {
  @Input() emp_id: any;
  @Input() role: any;
  @Input() added_date: any;
  @Input() userlevel: any;
  @Input() spoke_person_id: any;

  Allusers: any[] = [];
  AllEmployee: any[] = [];
  pro: any;
  AllSpokePersonEmp: any[] = [];
  Allspokeperson: any[] = [];

  Empselectedspokeperson: any = null;

  spokepersonEmpAddform: FormGroup;
  spokepersonEmpEditform: FormGroup;

  constructor(private _rest: RestService) {
    this.spokepersonEmpAddform = new FormGroup({
      spoke_person_id: new FormControl(''),
      emp_id: new FormControl(''),
      role: new FormControl(''),
      added_date: new FormControl(''),
      added_time: new FormControl('')
    })

    this.spokepersonEmpEditform = new FormGroup({
      spoke_person_emp_id: new FormControl(''),
      spoke_person_id: new FormControl(''),
      emp_id: new FormControl(''),
      role: new FormControl(''),
      added_date: new FormControl(''),
      added_time: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getuserlevel();
    this.getallspokeemployee();
    this.getEmployee();
    this.getspokeperson();
  }

  getuserlevel() {
    this._rest.Alluserlevel().subscribe((data: any) => {
      this.Allusers = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  getspokeperson() {
    this._rest.Allspokeperson().subscribe((data: any) => {
      this.Allspokeperson = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  getEmployee() {
    this._rest.Allemployee().subscribe((data: any) => {
      console.log(data);
      this.AllEmployee = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }
  getallspokeemployee() {
    this._rest.Allspoke_person_emp().subscribe((data: any) => {
      this.AllSpokePersonEmp = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  AddSpokePersonEmp() {
    this._rest.AddSpokeempperson(this.spokepersonEmpAddform.value).subscribe((data: any) => {
      console.log(data);
      this.AllSpokePersonEmp.push();
      this.getallspokeemployee();
      this.spokepersonEmpAddform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  EditSPkoeEmp(spoke_person_emp_id: number) {
    const SelecteEmpSpoke = this.AllSpokePersonEmp.find(empspoke => empspoke.spoke_person_emp_id === spoke_person_emp_id);
    if (SelecteEmpSpoke) {
      this.Empselectedspokeperson = 1;
      this.spokepersonEmpEditform.patchValue(SelecteEmpSpoke);
    } else {
      console.log(`Spokeperson ${spoke_person_emp_id} Not Found`);
    }
  }

  UpdateSpokeemp() {
    this._rest.updateSpokepersonemp(this.spokepersonEmpEditform.value).subscribe((data: any) => {
      this.getallspokeemployee();
      this.spokepersonEmpEditform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  DeleteSpokeemp(spoke_person_emp_id: number) {
    if (confirm('Are You Sure To Delete AdminUser?')) {
      this._rest.DeleteSpokepersonemp(spoke_person_emp_id).subscribe((data: any) => {
        console.log(data);
        this.getallspokeemployee();
      }, (err: any) => {
        console.log(err);
      })
    }
  }

  findbyempid() {
    this._rest.SpokePsersonempbyEmp({ emp_id: this.emp_id }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.AllSpokePersonEmp = data.data;
        this.getallspokeemployee();
      } else {
        this.AllSpokePersonEmp = [];
      }
    },
      (err: any) => {
        console.log(err);
      }
    )
  }

  findbyrole() {
    this._rest.SpokepersonRole({ role: this.role }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.AllSpokePersonEmp = data.data;
        // this.getSpokePersonEmp();
      } else {
        this.AllSpokePersonEmp = [];
      }
    }, (err: any) => {
      console.log(err);
    })
  }

  findbydate() {
    this._rest.Spokepersonbydate({ added_date: this.added_date }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.AllSpokePersonEmp = data.data;
      } else {
        this.AllSpokePersonEmp = [];
      }
    }, (err: any) => {
      console.log(err);
    })
  }
}