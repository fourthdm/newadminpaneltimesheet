import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-spokepersonwithjob',
  templateUrl: './spokepersonwithjob.component.html',
  styleUrls: ['./spokepersonwithjob.component.css']
})
export class SpokepersonwithjobComponent implements OnInit {
  pro: any;
  AddformspokepersonJobType: FormGroup;
  EditformspokepersonJobType: FormGroup;

  Empselectedspokeperson: any = null;
  ALLSpokePersonjobtype: any[] = [];

  Allspokeperson: any[] = [];
  Alljobsubtype: any[] = [];
  Alljobtype: any[] = [];

  @Input() spoke_person_id: any;

  JobtypeSelectedSpokeperson: any = null;

  constructor(private _rest: RestService) {
    this.AddformspokepersonJobType = new FormGroup({
      spoke_person_id: new FormControl(''),
      job_type_id: new FormControl(''),
      job_sub_type_id: new FormControl(''),
      drafting_hrs: new FormControl(''),
      drafting_min: new FormControl(''),
      qc_hrs: new FormControl(''),
      qc_min: new FormControl(''),
      tot_min: new FormControl(''),
    })

    this.EditformspokepersonJobType = new FormGroup({
      spoke_person_job_type_id: new FormControl(''),
      spoke_person_id: new FormControl(''),
      job_type_id: new FormControl(''),
      job_sub_type_id: new FormControl(''),
      drafting_hrs: new FormControl(''),
      drafting_min: new FormControl(''),
      qc_hrs: new FormControl(''),
      qc_min: new FormControl(''),
      tot_min: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.getjobtypespokeperson();
    this.getspokeperson();
    this.getalljobsubtype();
    this.getalljobtype();
  }

  getspokeperson() {
    this._rest.Allspokeperson().subscribe((data: any) => {
      this.Allspokeperson = data.data;
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
  //   findbyrole() {
  //   this._rest.SpokepersonRole({ role: this.role }).subscribe((data: any) => {
  //     if (data && data.data && data.data.length > 0) {
  //       console.log(data);
  //       this.AllSpokePersonEmp = data.data;
  //       // this.getSpokePersonEmp();
  //     } else {
  //       this.AllSpokePersonEmp = [];
  //     }
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  // findbydate() {
  //   this._rest.Spokepersonbydate({ added_date: this.added_date }).subscribe((data: any) => {
  //     if (data && data.data && data.data.length > 0) {
  //       console.log(data);
  //       this.AllSpokePersonEmp = data.data;
  //     } else {
  //       this.AllSpokePersonEmp = [];
  //     }
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  // getemployee() {
  //   this._rest.Allemployee().subscribe((data: any) => {
  //     this.AllEmployee = data.data;
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  getjobtypespokeperson() {
    this._rest.AllSpokejobtypes().subscribe((data: any) => {
      console.log(data);
      this.ALLSpokePersonjobtype = data.data;
    }, (err: any) => {
      console.log(err);
    });
  }

  AJobtypespokeperson() {
    this._rest.Addspokejobtype(this.AddformspokepersonJobType.value).subscribe((data: any) => {
      console.log(data);
      this.ALLSpokePersonjobtype.push();
      this.getjobtypespokeperson();
      this.AddformspokepersonJobType.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  jobtypeEdit(spoke_person_job_type_id: number) {
    const Selectjobchecklist = this.ALLSpokePersonjobtype.find(spokepersonjob => spokepersonjob.spoke_person_job_type_id === spoke_person_job_type_id)
    if (Selectjobchecklist) {
      this.JobtypeSelectedSpokeperson = 1;
      this.EditformspokepersonJobType.patchValue(Selectjobchecklist);
    }
    else {
      console.log(`Spokeperson ${spoke_person_job_type_id} Not Found`);
    }
  }

  UpdateJobtypespokeperson() {
    this._rest.Updatespokejobtype(this.EditformspokepersonJobType.value).subscribe((data: any) => {
      console.log(data);
      this.ALLSpokePersonjobtype = data.data;
      this.EditformspokepersonJobType.reset();
    })
  }

  DeleteJobtypespokeperson(spoke_person_job_type_id: any) {
    if (confirm('Are you want to delete a spoke Person job type')) {
      this._rest.DeleteSpokepersonjobtype(spoke_person_job_type_id).subscribe((data: any) => {
        console.log(data);
        this.ALLSpokePersonjobtype = data.data;
      }, (err: any) => {
        console.log(err);
      });
    }
  }

  BySpokeperson() {
    this._rest.GetbyJobtypebySpokepersonid({ spoke_person_id: this.BySpokeperson }).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        console.log(data);
        this.ALLSpokePersonjobtype = data.data;
      } else {
        this.ALLSpokePersonjobtype = data.data;
      }
    }, (err: any) => {
      console.log(err);
    })
  }

}