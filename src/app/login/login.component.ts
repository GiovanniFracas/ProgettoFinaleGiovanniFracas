import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLogin } from '../classes/auth/admin-login';
import { Clienti } from '../classes/clienti/clienti';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  payload: AdminLogin = new AdminLogin();

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.payload).subscribe(data => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('currentUser', JSON.stringify(data.id));
      this.authService.currentUser = data;
      console.log(data);
      this.router.navigate(['home'])
    })
  }




}
