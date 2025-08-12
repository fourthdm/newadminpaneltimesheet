import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-qctime',
  templateUrl: './qctime.component.html',
  styleUrls: ['./qctime.component.css']
})
export class QctimeComponent implements OnInit {

  Allqctime: any[] = [];

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this.getqctime();
  }

  getqctime() {
    this._rest.AllQctime().subscribe((data: any) => {
      this.Allqctime = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  Deleteqctime(qc_time_id: number) {
    this._rest.Deleteqctime(qc_time_id).subscribe((data: any) => {
      this.getqctime();
      console.log();
    }, (err: any) => {
      console.log(err);
    });
  }

}