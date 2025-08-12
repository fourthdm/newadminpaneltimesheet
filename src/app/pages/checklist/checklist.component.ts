import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {
  pro: any;
  prooo: any;
  Alleng: any[] = [];
  Allchecklist: any[] = [];
  Addchecklistform: FormGroup;
  Updatechecklistform: FormGroup;
  Alljobs: any[] = [];
  selctedchecklist: any = null;

  Alljobchecklist: any[] = [];

  selectedjobchecklist: any = null;

  jobchecklistaddform: FormGroup;

  Editformjobchecklist: FormGroup;

  constructor(private _rest: RestService) {
    this.Addchecklistform = new FormGroup({
      checklist_name: new FormControl('', [Validators.required]),
    });

    this.Updatechecklistform = new FormGroup({
      checklist_id: new FormControl(''),
      checklist_name: new FormControl(''),
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
    this.getchecklist();
    this.getalljobchecklist();
    this.Getengineer();
    this.getalljobs();
  }

  getalljobs() {
    this._rest.AllJobs().subscribe((data: any) => {
      this.Alljobs = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  getchecklist() {
    this._rest.Allchecklist().subscribe((data: any) => {
      this.Allchecklist = data.data;
    }, (err: any) => {
      console.log(err);
    });
  }

  Addchecklist() {
    this._rest.Addchecklist(this.Addchecklistform.value).subscribe((data: any) => {
      console.log(data);
      this.Allchecklist.push();
      this.getchecklist();
      this.Addchecklistform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  editchekclist(checklist_id: number) {
    const selectchecklist = this.Allchecklist.find(checklist => checklist.checklist_id === checklist_id)
    if (selectchecklist) {
      this.selctedchecklist = 1;
      this.Updatechecklistform.patchValue(selectchecklist);
    }
    else {
      console.log(`Job with ID ${checklist_id} not found.`);
    }
    // this.Updatechecklistform.patchValue(this.Allchecklist[i - 1]);
  }

  Updatechecklist() {
    this._rest.Updatechcklist(this.Updatechecklistform.value).subscribe((data: any) => {
      console.log(data);
      this.selctedchecklist = null;
      this.Updatechecklistform.reset();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    })
  }

  delete(checklist_id: number) {
    if (confirm('Are You Sure To Delete AdminUser?')) {
      this._rest.Deletechecklist(checklist_id).subscribe(data => {
        console.log(data);
        this.getchecklist();
      }, err => {
        console.log(err);
        this.getchecklist();
      });
    }
  }

  getalljobchecklist() {
    this._rest.Alljobchecklist().subscribe((data: any) => {
      this.Alljobchecklist = data.data;
      console.log(data.data);
    }, (err: any) => {
      console.log(err)
    })
  }

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

  Getengineer() {
    this._rest.AllengineerEmployee().subscribe((data: any) => {
      console.log(data);
      this.Alleng = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

}