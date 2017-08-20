import { Component, OnInit } from '@angular/core';

import { ChildService } from '../../service/child/child.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
  providers: [ChildService]
})
export class QrcodeComponent implements OnInit {

  public uid: String = '';
  public uname: String = '';
  public qrcode_error: Boolean = false;
  constructor(
    private childService: ChildService
  ) { }

  ngOnInit() {
    this.parseQRcode();
  }

  public parseQRcode() {
    let url = new URL(location.href);
    let qr = url.searchParams.get('uid');
    console.log(`uid = ${qr}`);
    if (qr) {
      this.uid = qr;
      this.getChild(this.uid);
      this.qrcode_error = false;
    } else {
      this.qrcode_error = true;
    }

  }

  public async getChild(id) {
    await this.childService.getChild(id)
      .subscribe(
      result => {
        console.log(result)
        this.uname = result[0][0].name
      });
  }
}
