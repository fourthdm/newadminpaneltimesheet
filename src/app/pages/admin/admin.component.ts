import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  Alladmin: any[] = [];

  Addadminform: FormGroup;
  EditAdminform: FormGroup;

  Selectedadmin: any = null;


  constructor(private _rest: RestService) {
    this.Addadminform = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });

    this.EditAdminform = new FormGroup({
      id: new FormControl(''),
      Name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getadmin();
  }

  getadmin() {
    this._rest.Alladmin().subscribe((data: any) => {
      this.Alladmin = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Addadmin() {
    this._rest.Addadmin(this.Addadminform.value).subscribe((data: any) => {
      console.log(data);
      this.Alladmin.push();
      this.getadmin();
      this.Addadminform.reset();
      this.ngOnInit()
    }, (err: any) => {
      console.log(err);
    })
  }

  EditAdmin(id: number) {
    const SelectA = this.Alladmin.find(admin => admin.id === id)
    if (SelectA) {
      this.Selectedadmin = 1;
      this.EditAdminform.patchValue(SelectA);
    } else {
      console.log(`Admin ${id} are not found`)
    }
  }

  UpdateAdmin() {
    this._rest.UpdateAdmin(this.EditAdminform.value).subscribe((data: any) => {
      console.log(data);
      this.getadmin();
      this.EditAdminform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  DeleteAdmin(id: any) {
    this._rest.DeleteAdmin(id).subscribe((data: any) => {
      console.log(data);
      this.getadmin();
    }, (err: any) => {
      console.log(err);
    })
  }

}
