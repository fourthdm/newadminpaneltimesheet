import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-timegap',
  templateUrl: './timegap.component.html',
  styleUrls: ['./timegap.component.css']
})
export class TimegapComponent implements OnInit {

  pro: any;

  Alltimegap: any[] = [];
  timegapform: FormGroup;
  Edittimegapform: FormGroup;

  selectedtimegap: any = null;

  constructor(private _rest: RestService) {
    this.timegapform = new FormGroup({
      val: new FormControl('')
    });

    this.Edittimegapform = new FormGroup({
      timegap_id: new FormControl(''),
      val: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.gettimegap();
  }

  gettimegap() {
    this._rest.Alltimegap().subscribe((data: any) => {
      this.Alltimegap = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Addtimegap() {
    this._rest.Addtimegap(this.timegapform.value).subscribe((data: any) => {
      this.Alltimegap.push();
      this.timegapform.reset();
      this.gettimegap();
    }, (err: any) => {
      console.log(err);
    })
  }

  Edittimegap(i: number) {
    this.selectedtimegap = 1;
    this.Edittimegapform.patchValue(this.Alltimegap[i - 1]);
  }

  Updatetimegap() {
    this._rest.Updatetimegap(this.Edittimegapform.value).subscribe((data: any) => {
      console.log(data);
      this.gettimegap();
      this.Edittimegapform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  Deletetimegap(timegap_id: any) {
    if (confirm('Are You want to delete timegap?')) {
      this._rest.Deletetimegap(timegap_id).subscribe((data: any) => {
        this.gettimegap();
      }, (err: any) => {
        console.log(err);
      })
    }
  }

}
