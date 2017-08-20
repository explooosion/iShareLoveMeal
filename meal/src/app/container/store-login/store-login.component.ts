import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-login',
  templateUrl: './store-login.component.html',
  styleUrls: ['./store-login.component.css']
})
export class StoreLoginComponent implements OnInit {

  public storeId: String = '';

  constructor(private router: Router) {

  }
  ngOnInit() {
  }

  public chkStore() {
    if (this.storeId != '1234') {
      alert('查無此店家代號，請重新嘗試！');
    }
    else {
      this.router.navigate(["/childlogin"]);
    }
  }
}
