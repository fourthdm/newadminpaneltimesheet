import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {

  Alljobs: any[] = [];

  constructor(private _rest: RestService, private _activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      const job_id = params['job_id'];
      this._rest.Alljobsbyjobid(job_id).subscribe((data: any) => {
        this.Alljobs = data.data;
        console.log(data);
      }, (err: any) => {
        console.log(err);
      })
    })
  }

  updateTime(job_id: number) {
    this._rest.UpdateJObfortotaltimecalculation(job_id).subscribe(
      response => {
        console.log('Total time updated:', response);
        alert('Total time updated successfully!');
        this.ngOnInit();
      },
      error => {
        console.error('Error updating total time:', error);
      }
    );
  }  
}