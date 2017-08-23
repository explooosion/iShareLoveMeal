import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../service/store/store.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

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
    this.storeCheckCookie();
  }

  public storeCheckCookie() {
    let res = JSON.parse(Cookie.get('storeCookie'));
    if (res) {
      this.storeId = res.account;
      this.storePwd = res.password;
      this.storeCheck();
    }

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
          Cookie.set('storeCookie', JSON.stringify(this.reslut));
          this.router.navigate(["/childlogin"]
            , {
              queryParams: {
                'childid': Cookie.get('qrcodeCookie')
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
