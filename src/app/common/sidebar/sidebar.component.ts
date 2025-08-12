import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAuthor: boolean = false;

  constructor(private _router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  ngOnInit(): void {

    const token = localStorage.getItem('token')
    if (token) {
      const decoded: any = jwtDecode(' token')
      if (decoded.roles = decoded.roles.includes('Manager')) {
        this.isAuthor = true;
      } else {
        this.isAuthor = false;
      }
    }
  }

}