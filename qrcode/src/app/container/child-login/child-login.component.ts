import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ChildService } from '../../service/child/child.service';

@Component({
  selector: 'app-child-login',
  templateUrl: './child-login.component.html',
  styleUrls: ['./child-login.component.css'],
  providers: [ChildService]
})
export class ChildLoginComponent implements OnInit {

  public childPWD: String = '';

  constructor(
    private router: Router,
    private childService: ChildService
  ) {

  }
  ngOnInit() {
  }

  public chkChild() {
    if (this.childPWD != '1234') {
      alert('密碼錯誤，請重新嘗試！');
    }
    else {
      this.router.navigate(["/childcheck"]);
    }
  }

  public async getChild(id) {
    return await this.childService.getChild(id)
      .subscribe(
      result => {
        return result[0][0].password
      });
  }
}
