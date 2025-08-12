import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-jobtyes',
  templateUrl: './jobtyes.component.html',
  styleUrls: ['./jobtyes.component.css']
})
export class JobtyesComponent {

  @Input() job_type_id: any;

  Alljobtype: any[] = [];
  Alljobsubtype: any[] = [];
  Alljobchecklist: any[] = [];

  jobtypeselected: any = null;
  selectedjobsubtype: any = null;
  selectedjobchecklist: any = null;

  Addformjobtype: FormGroup;
  Addformjobsubtype: FormGroup;
  jobchecklistaddform: FormGroup;

  Editformjobtype: FormGroup;
  Editformjobsubtype: FormGroup;
  Editformjobchecklist: FormGroup;

  constructor(private _rest: RestService) {
    this.Addformjobtype = new FormGroup({
      job_type_name: new FormControl(''),
      status: new FormControl('')
    });

    this.Editformjobtype = new FormGroup({
      job_type_id: new FormControl(''),
      job_type_name: new FormControl(''),
      status: new FormControl('')
    })

    this.Addformjobsubtype = new FormGroup({
      job_type_id: new FormControl(''),
      job_sub_type_name: new FormControl(''),
      status: new FormControl('')
    })

    this.Editformjobsubtype = new FormGroup({
      job_sub_type_id: new FormControl(''),
      job_type_id: new FormControl(''),
      job_sub_type_name: new FormControl(''),
      status: new FormControl('')
    })

    this.jobchecklistaddform = new FormGroup({
      engg_emp_id: new FormControl(''),
      job_id: new FormControl(''),
      checklist_id: new FormControl(''),
      checklist_val: new FormControl(''),
      checklist_total_val: new FormControl(''),
      checklist_comment: new FormControl(''),
    })

    this.Editformjobchecklist = new FormGroup({
      job_checklist_id: new FormControl(''),
      engg_emp_id: new FormControl(''),
      job_id: new FormControl(''),
      checklist_id: new FormControl(''),
      checklist_val: new FormControl(''),
      checklist_total_val: new FormControl(''),
      checklist_comment: new FormControl(''),
      date: new FormControl('')
    })

  }

  ngOnInit(): void {
    this.getalljobchecklist();
    this.getalljobsubtype();
    this.getalljobtype();
  }

  getalljobtype() {
    this._rest.AllJobtypes().subscribe((data: any) => {
      this.Alljobtype = data.data;
      console.log(data);
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

  getalljobchecklist() {
    this._rest.Alljobchecklist().subscribe((data: any) => {
      this.Alljobchecklist = data.data;
      console.log(data.data);
    }, (err: any) => {
      console.log(err)
    })
  }

  AddJobtype() {
    this._rest.AddJobtype(this.Addformjobtype.value).subscribe((data: any) => {
      console.log(data);
      this.Alljobtype.push();
      this.Addformjobtype.reset();
      this.getalljobtype();
    }, (err: any) => {
      console.log(err);
    })
  }

  editjobtype(job_type_id: number) {
    const Selectedjobtype = this.Alljobtype.find(jobtype => jobtype.job_type_id === job_type_id)
    if (Selectedjobtype) {
      this.jobtypeselected = 1;
      this.Editformjobtype.patchValue(Selectedjobtype);
    } else {
      console.log(`Job with ID ${job_type_id} not found.`);
    }
  }

  Updatejobtype() {
    this._rest.Updatejobtypes(this.Editformjobtype.value).subscribe((data: any) => {
      this.Alljobtype = data;
      this.Editformjobtype.reset();
      this.getalljobtype();
    }, (err: any) => {
      console.log(err);
    })
  }

  DeleteJobtype(job_type_id: number) {
    this._rest.Deletejobtype(job_type_id).subscribe((data: any) => {
      this.Alljobtype = data.data;
      this.getalljobtype();
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  // Subtype job name
  Addjobsubtype() {
    this._rest.addjobsubtype(this.Addformjobsubtype.value).subscribe((data: any) => {
      console.log(data);
      this.Alljobsubtype.push();
      this.Addformjobsubtype.reset();
      this.getalljobsubtype();
    }, (err: any) => {
      console.log(err);
    })
  }


  editSubjobtype(job_sub_type_id: number) {
    const Selectedjobsubtype = this.Alljobsubtype.find(Subjobtype => Subjobtype.job_sub_type_id === job_sub_type_id)
    if (Selectedjobsubtype) {
      this.selectedjobsubtype = 1;
      this.Editformjobsubtype.patchValue(Selectedjobsubtype);
    } else {
      console.log(`Job with ID ${job_sub_type_id} not found.`);
    }
  }

  UpdateSubjobtype() {
    this._rest.Updatejobsubtype(this.Editformjobsubtype.value).subscribe((data: any) => {
      this.Alljobsubtype = data;
      this.Editformjobsubtype.reset();
      this.getalljobsubtype();
    }, (err: any) => {
      console.log(err);
    })
  }

  DeleteSubJobtype(job_sub_type_id: number) {
    this._rest.Deletejobsubtype(job_sub_type_id).subscribe((data: any) => {
      this.Alljobsubtype = data;
      this.getalljobsubtype();
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  FindSubtypewithjobtype() {
    this._rest.AllAllsubtypedatabyjobtypeid({ job_type_id: this.job_type_id }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.Alljobsubtype = data.data;
      } else {
        this.Alljobsubtype = [];
        console.log('No data found');
      }
    }, (err: any) => {
      console.log(err);
    })
  }

  // JobChecklist
  Addjobchecklist() {
    this._rest.Addjobchecklist(this.jobchecklistaddform.value).subscribe((data: any) => {
      console.log(data);
      this.Alljobchecklist.push(data);
      this.jobchecklistaddform.reset();
      this.getalljobchecklist();
    }, (err: any) => {
      console.log(err);
    })
  }

  editJobChecklist(job_checklist_id: number) {
    const Selectedjobchecklist = this.Alljobchecklist.find(jobchecklist => jobchecklist.job_checklist_id === job_checklist_id)
    if (Selectedjobchecklist) {
      this.selectedjobchecklist = 1;
      this.Editformjobchecklist.patchValue(Selectedjobchecklist);
    } else {
      console.log(`Job with ID ${job_checklist_id} not found.`);
    }
  }

  UpdateJobchecklist() {
    this._rest.Updatejobchecklist(this.Editformjobchecklist.value).subscribe((data: any) => {
      this.Alljobchecklist.push(data);
      this.Alljobchecklist = data;
      this.Editformjobchecklist.reset();
      this.getalljobchecklist();
    }, (err: any) => {
      console.log(err);
    })
  }

  DeleteJobchecklist(job_checklist_id: any) {
    this._rest.Deletejobchecklist(job_checklist_id).subscribe((data: any) => {
      console.log(data);
      this.Alljobchecklist = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

}