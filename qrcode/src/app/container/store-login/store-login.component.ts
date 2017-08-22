import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService } from '../../service/store/store.service';

@Component({
  selector: 'app-store-login',
  templateUrl: './store-login.component.html',
  styleUrls: ['./store-login.component.css'],
  providers: [StoreService]
})
export class StoreLoginComponent implements OnInit {

  public storeId: String = 'a01';
  public storePwd: String = '123456';

  public reslut: any = null;

  constructor(
    private router: Router,
    private storeService: StoreService
  ) { }

  ngOnInit() {
  }

  public async storeCheck() {

    let body = {
      storeId: this.storeId,
      storePwd: this.storePwd
    };
    await this.storeLogin(body);

  }

  public async storeLogin(body: Object) {

    await this.storeService.storeLogin(body)
      .subscribe(
      result => {
        this.reslut = result[0][0];
        if (this.reslut) {
          this.router.navigate(["/childlogin"]
            , {
              queryParams: {
                'childid': 'jason123'
              }
            }
          );
        }
        else {
          alert('查無此店家代號，請重新嘗試！');
        }
      });
  }
}
