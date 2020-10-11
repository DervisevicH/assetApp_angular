import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  error: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  login(value) {
    this.model.action = 'login';
    this.loginService.loginForm(value.username, value.password).subscribe(response => {
        this.loginService.setUser(response);
    }, error => {
      this.error = error;
    });
  }
}
