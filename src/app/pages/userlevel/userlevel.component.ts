import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-userlevel',
  templateUrl: './userlevel.component.html',
  styleUrls: ['./userlevel.component.css']
})
export class UserlevelComponent {
  pro: any;

  userlevel: any[] = [];

  Adduserlevelform: FormGroup;
  edituserlevelform: FormGroup;
  Selecteduserlevel: any = null;

  constructor(private _rest: RestService) {
    this.Adduserlevelform = new FormGroup({
      name: new FormControl('', [Validators.required])
    })

    this.edituserlevelform = new FormGroup({
      userlevel_id: new FormControl(''),
      name: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getUserlevel();
  }

  getUserlevel() {
    this._rest.Alluserlevel().subscribe((data: any) => {
      this.userlevel = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }
  Adduserlevel() {
    this._rest.Adduserlevel(this.Adduserlevelform.value).subscribe((data: any) => {
      console.log(data);
      this.userlevel.push();
      this.Adduserlevelform.reset();
      this.getUserlevel();
    }, (err: any) => {
      console.log(err);
    })
  }

  edituserlevel(userlevel_id: number) {
    const Userselect = this.userlevel.find(users => users.userlevel_id === userlevel_id);
    if (Userselect) {
      this.Selecteduserlevel = 1;
      this.edituserlevelform.patchValue(Userselect);
    }
  }

  Updateuserlevel() {
    this._rest.Updateuserlevel(this.edituserlevelform.value).subscribe((data: any) => {
      console.log(data);
      this.getUserlevel();
      this.edituserlevelform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  Deleteuserlevel(userlevel_id: any) {
    this._rest.Deleteuserlevel(userlevel_id).subscribe((data: any) => {
      console.log(data);
      this.getUserlevel();
    }, (err: any) => {
      console.log(err);
    })
  }

}