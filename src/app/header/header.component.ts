import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDisplayName = '';
  isLoggedIn: boolean;
  constructor(private loginService: LoginService) {
    this.loginService.username.subscribe(x => this.userDisplayName = x);    
   }

  ngOnInit() {
    
  }
  signOut() {
    this.loginService.logout();
  }

}
