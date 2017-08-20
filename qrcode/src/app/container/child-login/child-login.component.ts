import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-login',
  templateUrl: './child-login.component.html',
  styleUrls: ['./child-login.component.css']
})
export class ChildLoginComponent implements OnInit {

  public childPWD: String = '';

  constructor(private router: Router) {

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
}
