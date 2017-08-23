import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkUrl();
  }

  public checkUrl() {
    // debug http://localhost:4200/qrcode?childid=jason123
    var id = this.router['rawUrlTree']['queryParams']['childid'];
    if (id) {
      Cookie.set('qrcodeCookie', id);
      this.router.navigate(["/storelogin"]);
    }
  }
}
