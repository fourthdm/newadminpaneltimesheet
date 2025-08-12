import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-enggtimes',
  templateUrl: './enggtimes.component.html',
  styleUrls: ['./enggtimes.component.css']
})
export class EnggtimesComponent implements OnInit {

  Allenggtime: any[] = [];

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this.getallenggtime();
  }

  getallenggtime() {
    this._rest.Allenggtime().subscribe((data: any) => {
      this.Allenggtime = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Deleteenggtime(engg_time_id: number) {
    this._rest.Deleteenggtime(engg_time_id).subscribe((data: any) => {
      this.getallenggtime();
      console.log(data);
    },(err: any)=>{
      console.log(err);
    })
  }
}
