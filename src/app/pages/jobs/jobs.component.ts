import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  fileName = 'jobdata.xlsx';

  jobId: number = 1; // Example job ID, can be dynamic
  enggTotalTime: number = 0;
  qcTotalTime: number = 0;
  pro: any;
  Alljobs: any[] = [];
  Addjobform: FormGroup;
  Editjobform: FormGroup;

  @Input() engg_emp_id: any;

  selectedjobs: any = null;

  constructor(private _rest: RestService) {
    this.Addjobform = new FormGroup({
      job_no: new FormControl('', [Validators.required]),
      order_id: new FormControl('', [Validators.required]),
      spoke_person_id: new FormControl('', [Validators.required]),
      job_type_id: new FormControl('', [Validators.required]),
      job_sub_type_id: new FormControl('', [Validators.required]),
      engg_emp_id: new FormControl('', [Validators.required]),
      qc_emp_id: new FormControl('', [Validators.required]),
      co_emp_id: new FormControl('', [Validators.required]),
      drafting_hrs: new FormControl('', [Validators.required]),
      drafting_min: new FormControl('', [Validators.required]),
      qc_hrs: new FormControl('', [Validators.required]),
      qc_min: new FormControl('', [Validators.required]),
      engg_total_time: new FormControl('', [Validators.required]),
      qc_total_time: new FormControl('', [Validators.required]),
      qc_performance_factor: new FormControl('', [Validators.required]),
      create_date: new FormControl(''),
      create_time: new FormControl(''),
      created_by: new FormControl('', [Validators.required]),
      created_by_emp_id: new FormControl('', [Validators.required]),
      engg_comment: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });

    this.Editjobform = new FormGroup({
      job_id: new FormControl('', [Validators.required]),
      job_no: new FormControl('', [Validators.required]),
      order_id: new FormControl('', [Validators.required]),
      spoke_person_id: new FormControl('', [Validators.required]),
      job_type_id: new FormControl('', [Validators.required]),
      job_sub_type_id: new FormControl('', [Validators.required]),
      engg_emp_id: new FormControl('', [Validators.required]),
      qc_emp_id: new FormControl('', [Validators.required]),
      co_emp_id: new FormControl('', [Validators.required]),
      drafting_hrs: new FormControl('', [Validators.required]),
      drafting_min: new FormControl('', [Validators.required]),
      qc_hrs: new FormControl('', [Validators.required]),
      qc_min: new FormControl('', [Validators.required]),
      extra_drafting_hrs: new FormControl('', [Validators.required]),
      extra_drafting_min: new FormControl('', [Validators.required]),
      qc_repairing_hrs: new FormControl('', [Validators.required]),
      qc_repairing_min: new FormControl('', [Validators.required]),
      engg_total_time: new FormControl('', [Validators.required]),
      qc_total_time: new FormControl('', [Validators.required]),
      qc_performance_factor: new FormControl('', [Validators.required]),
      created_by: new FormControl('', [Validators.required]),
      created_by_emp_id: new FormControl('', [Validators.required]),
      engg_comment: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      engg_status: new FormControl('', [Validators.required]),
      qc_status: new FormControl('', [Validators.required]),
    });
  }
  employees: any[] = [];
  Allspokeperson: any[] = [];
  Alljobtype: any[] = [];
  Alljobsubtype: any[] = [];
  Alladmin: any[] = [];
  Allqc: any[] = [];
  Allco: any[] = [];
  Alleng: any[] = [];

  ngOnInit(): void {
    this.getJobs();
    this.getEmployee();
    this.getspokeperson();
    this.getalljobtype();
    this.getalljobsubtype();
    this.getadmin();
    this.Getqc();
    this.GetCordinator();
    this.Getengineer();
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  getadmin() {
    this._rest.Alladmin().subscribe((data: any) => {
      this.Alladmin = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  getalljobsubtype() {
    this._rest.AllJobsubtype().subscribe((data: any) => {
      this.Alljobsubtype = data.data;
      console.log(data.data);
    }, (err: any) => {
      console.log(err);
    })
  }

  getalljobtype() {
    this._rest.AllJobtypes().subscribe((data: any) => {
      this.Alljobtype = data.data;
      console.log(data);
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
      this.employees = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Getqc() {
    this._rest.QCemployessinfo().subscribe((data: any) => {
      console.log(data);
      this.Allqc = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  GetCordinator() {
    this._rest.AllCoordinatorEmployee().subscribe((data: any) => {
      console.log(data);
      this.Allco = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Getengineer() {
    this._rest.AllengineerEmployee().subscribe((data: any) => {
      console.log(data);
      this.Alleng = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  getJobs() {
    this._rest.AllJobs().subscribe((data: any) => {
      this.Alljobs = data.data;
    }, (err: any) => {
      console.log(err)
    })
  }

  Getjobbyname() {
    this._rest.GetJobsbyDrafterName({ engg_emp_id: this.engg_emp_id }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.Alljobs = data.data;
      } else {
        this.Alljobs = [];
      }
    },
      (err: any) => {
        console.log(err);
      }
    )
  }

  Addjobs() {
    this._rest.Addjob(this.Addjobform.value).subscribe((data: any) => {
      this.Alljobs.push(data.data);
      this.getJobs();
      this.Addjobform.reset();
    }, (err: any) => {
      console.log(err)
    })
  }

  editjobs(job_id: number) {
    const Selectjob = this.Alljobs.find(jobs => jobs.job_id === job_id)
    if (Selectjob) {
      this.selectedjobs = 1;
      this.Editjobform.patchValue(Selectjob);
    }
    else {
      console.log(`Job with ID ${job_id} not found.`);
    }
  }

  updatejobs() {
    this._rest.updatejobs(this.Editjobform.value).subscribe((data: any) => {
      this.getJobs();
      this.Editjobform.reset();
      console.log(data);
    }, (err: any) => {
      console.log(err)
    })
  }

  Deletejobs(job_id: number) {
    if (confirm('Are You Sure To Delete Jobs?')) {
      this._rest.deletejobs(job_id).subscribe((data: any) => {
        console.log(data);
        this.getJobs();
      }, (err: any) => {
        console.log(err);
      })
    }
  }

}