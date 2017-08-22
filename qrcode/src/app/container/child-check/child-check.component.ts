import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../service/exchange/exchange.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import * as moment from 'moment';

@Component({
  selector: 'app-child-check',
  templateUrl: './child-check.component.html',
  styleUrls: ['./child-check.component.css'],
  providers: [ExchangeService]
})
export class ChildCheckComponent implements OnInit {

  public childId: String = '';
  public point: Number = 0;
  public storeId: String = '';
  public isDebug: Boolean = false;

  public showExchange: Boolean = true;

  constructor(
    private router: Router,
    private exchangeService: ExchangeService
  ) { }

  ngOnInit() {
    let childCookie = JSON.parse(Cookie.get('childCookie'));
    this.childId = childCookie.account;
    this.point = childCookie.point;

    let storeCookie = JSON.parse(Cookie.get('storeCookie'));
    this.storeId = storeCookie.account
    console.log(childCookie)
    console.log(storeCookie)
  }

  public async chkCheck() {
    let body = {
      childId: this.childId,
      storeId: this.storeId,
      point: this.point,
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
      pointCost: 10
    };

    await this.exchangeAdd(body);
  }

  public async exchangeAdd(body: Object) {


    if (!this.isDebug) {
      await this.exchangeService.exchangeAdd(body).subscribe(
        result => {
          alert('兌換成功！');
          this.showExchange = false;
        }
      );

    } else {
      alert('點數不足！');
    }
  }


}
