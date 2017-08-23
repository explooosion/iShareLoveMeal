import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChildService } from '../../service/child/child.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-child-login',
  templateUrl: './child-login.component.html',
  styleUrls: ['./child-login.component.css'],
  providers: [ChildService]
})
export class ChildLoginComponent implements OnInit {

  public childId: String = '';
  public childPwd: String = '';

  public reslut: any = null;

  constructor(
    private router: Router,
    private childService: ChildService
  ) {

  }
  ngOnInit() {
    this.childCheckUrl();
  }

  public childCheckUrl() {
    this.childId = this.router['rawUrlTree']['queryParams']['childid'];
    if (!this.childId) {
      this.router.navigate(["/storelogin"]);
    }
  }

  public async childCheck() {
    let body = {
      childId: this.childId,
      childPwd: this.childPwd
    };

    await this.childLogin(body);
  }

  public async childLogin(body: Object) {
    return await this.childService.childLogin(body)
      .subscribe(
      result => {
        this.reslut = result[0][0];
        if (this.reslut) {
          Cookie.set('childCookie', JSON.stringify(this.reslut));
          this.router.navigate(["/childcheck"]);
        }
        else {
          alert('密碼錯誤，請重新嘗試！');
        }
      });
  }


}
