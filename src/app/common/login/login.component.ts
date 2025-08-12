import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  liked: boolean = false;

  Loginform: FormGroup;

  constructor(private _rest: RestService, private _router: Router, private _toastr: ToastrService) {
    this.Loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(8)])
    })
  }

  ngOnInit(): void {

  }

  Show() {
    this.liked = !this.liked;
  }

  loginn() {
    this._rest.AdminLogin(this.Loginform.value).subscribe(
      (data: any) => {
        console.log(data);
        if (data && data.data) {
          this._toastr.success('Login successfully', 'Success', {
            positionClass: 'toast-top-right' // Explicitly set position here
          });
          // this._toastr.success('Login successfully', 'Success');
          localStorage.setItem('token', data.data);
          this._router.navigate(['/Home']);
        } else {
          this._toastr.error('Invalid Admin Credentials', 'Error');
        }
      },
      (error) => {
        this._toastr.error('Unauthorized Admin', 'Login Again');
        console.error('Login Error:', error);
      }
    );
  }
}
