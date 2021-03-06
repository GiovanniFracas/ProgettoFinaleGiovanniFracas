import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from '../classes/auth/sign-up';
import { SignUpResponse } from '../classes/auth/sign-upResponse';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authSrv: AuthService, private router: Router) { }

  ruolo!: string;

  ngOnInit(): void {
  }
  onsignup(form: NgForm) {
    console.log(form.value);

    this.authSrv.signup(form.value).subscribe(res => {
      console.log(res);
      alert('Registrazione avvenuta!')
      this.router.navigate(['/']);
    });

  }
}
