import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-check',
  templateUrl: './child-check.component.html',
  styleUrls: ['./child-check.component.css']
})
export class ChildCheckComponent implements OnInit {

  public childId: String = '10606001';
  public childPoint: Number = 20;

  public isDebug: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public chkCheck() {
    if (this.childPoint >= 20) {
      alert('兌換成功！');
    } else {
      alert('點數不足！');
    }
  }

  public debug() {
    if (!this.isDebug) {
      this.childPoint = 0;
    } else {
      this.childPoint = 20;
    }
  }
}
