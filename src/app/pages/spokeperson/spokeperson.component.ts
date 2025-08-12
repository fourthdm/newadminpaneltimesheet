import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-spokeperson',
  templateUrl: './spokeperson.component.html',
  styleUrls: ['./spokeperson.component.css']
})
export class SpokepersonComponent implements OnInit {

  Allteam: any[] = [];

  Allspokeperson: any[] = [];
  Addspokepersonform: FormGroup;
  Editspokepersonform: FormGroup;
  pro: any;
  selectedspokeperson: any = null;

  constructor(@Inject (RestService) private _rest: RestService) {
    this.Addspokepersonform = new FormGroup({
      sp_code: new FormControl(''),
      spoke_person_name: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });

    this.Editspokepersonform = new FormGroup({
      spoke_person_id: new FormControl(''),
      sp_code: new FormControl(''),
      spoke_person_name: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getspokeperson();
    this.AllTeam();
  }

  getspokeperson() {
    this._rest.Allspokeperson().subscribe((data: any) => {
      this.Allspokeperson = data.data;
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

  AddSpokeperson() {
    this._rest.Addspokeperson(this.Addspokepersonform.value).subscribe((data: any) => {
      this.Allspokeperson.push();
      this.getspokeperson();
      this.Addspokepersonform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  editspokeperson(spoke_person_id: number) {
    const SelectSpokeperson = this.Allspokeperson.find(spokeperson => spokeperson.spoke_person_id === spoke_person_id);
    if (SelectSpokeperson) {
      this.selectedspokeperson = 1;
      this.Editspokepersonform.patchValue(SelectSpokeperson);
    }
    else {
      console.log(`Spokeperson ${spoke_person_id} Not Found`);
    }
  }

  updatespokeperson() {
    this._rest.Updatespokeperson(this.Editspokepersonform.value).subscribe((data: any) => {
      console.log(data);
      this.selectedspokeperson = null;
      this.Editspokepersonform.reset();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    })
  }

  delete(spoke_person_id: number) {
    if (confirm('Are You Sure To Delete AdminUser?')) {
      this._rest.Deletespokeperson(spoke_person_id).subscribe(data => {
        console.log(data);
        this.getspokeperson();
      }, err => {
        console.log(err);
        this.getspokeperson();
      });
    }
  }

}
