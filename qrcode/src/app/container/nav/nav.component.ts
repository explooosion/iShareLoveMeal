import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isLogin: Boolean = false;
  public welcomeMSG: String = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  public checkLogin() {
    let cookie = JSON.parse(Cookie.get('storeCookie'));
    if (cookie) {
      this.isLogin = true;
      this.welcomeMSG = `Hi, ${cookie.name}!`;
    }
  }

  public loginOut() {
    Cookie.delete('storeCookie');
  }

}
