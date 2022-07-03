import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string | undefined
  password: string | undefined
  mouseoverLogin: boolean | undefined
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formValues: any): any {
    console.log(formValues)
    this.authService.loginUser(formValues.email,formValues.password)
    this.router.navigate(['/home'])
  }

}
