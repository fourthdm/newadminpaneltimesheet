import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  pro: any;

  AllEmployee: any[] = [];
  AllTimesheet: any[] = [];
  Alljobs: any[] = [];

  Alluserlevel: any[] = [];

  Addforms: FormGroup;
  Editform: FormGroup;
  SelectedTimesheet: any = null;

  @Input() emp_id: any;
  @Input() date: any;

  constructor(private _rest: RestService) {
    this.Addforms = new FormGroup({
      role: new FormControl('', [Validators.required]),
      emp_id: new FormControl('', [Validators.required]),
      job_id: new FormControl('', [Validators.required]),
      job_no: new FormControl('', [Validators.required]),
      // start_time: new FormControl('', [Validators.required]),
      // end_time: new FormControl('', [Validators.required]),
      // date: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
    this.Editform = new FormGroup({
      timesheet_id: new FormControl(''),
      role: new FormControl('', [Validators.required]),
      emp_id: new FormControl('', [Validators.required]),
      job_id: new FormControl('', [Validators.required]),
      job_no: new FormControl('', [Validators.required]),
      // start_time: new FormControl('', [Validators.required]),
      // end_time: new FormControl('', [Validators.required]),
      // date: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.gettimesheet();
    this.getemployee();
    this.getalljobs();
    this.getalluserlevel();
  }

  getalluserlevel() {
    this._rest.Alluserlevel().subscribe((data: any) => {
      this.Alluserlevel = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  getalljobs() {
    this._rest.AllJobs().subscribe((data: any) => {
      this.Alljobs = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }
  
  getemployee() {
    this._rest.Allemployee().subscribe((data: any) => {
      this.AllEmployee = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  gettimesheet() {
    this._rest.Alltimesheet().subscribe((data: any) => {
      this.AllTimesheet = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Addtimesheet() {
    this._rest.Addtimesheet(this.Addforms.value).subscribe((data: any) => {
      this.AllTimesheet.push(data);
      this.Addforms.reset();
      this.gettimesheet();
    }, (err: any) => {
      console.log(err);
    })
  }

  edittimesheet(timesheet_id: number) {
    const Selctetimesheet = this.AllTimesheet.find(timesheet => timesheet.timesheet_id === timesheet_id);
    if (Selctetimesheet) {
      this.SelectedTimesheet = 1;
      this.Editform.patchValue(Selctetimesheet);
    }
    else {
      console.log(`Timesheet ${timesheet_id} update`);
    }
  }

  UpdateTimesheet() {
    this._rest.UpdateTimesheet(this.Editform.value).subscribe((data: any) => {
      this.gettimesheet();
      console.log(data);
      this.Editform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  delete(timesheet_id: number) {
    if (confirm('Are You Sure To Delete Timesheet?')) {
      this._rest.DeleteTimesheet(timesheet_id).subscribe(data => {
        console.log(data);
        this.gettimesheet();
      }, err => {
        console.log(err);
        this.gettimesheet();
      });
    }
  }

  //function when the selected by employee ID
  emptimesheet() {
    this._rest.Timesheetbyemp({ emp_id: this.emp_id }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.AllTimesheet = data.data;
      } else {
        this.AllTimesheet = [];
      }
    },
      (err: any) => {
        console.log(err);
      }
    )
  }

  Timesheetbydate() {
    this._rest.viewtimesheetbydate({ date: this.date }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.AllTimesheet = data.data;
      } else {
        this.AllTimesheet = [];
      }
    }, (err: any) => {
      console.log(err);
    })
  }

}
