import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  public uid: String = '';
  public uname: String = '';
  public qrcode_error: Boolean = false;
  constructor() { }

  ngOnInit() {
    this.parseQRcode();
  }

  public parseQRcode() {
    let url = new URL(location.href);
    let qr = url.searchParams.get('uid');
    console.log(`uid = ${qr}`);
    if (qr) {
      this.uid = qr;
      this.uname = '陳大目'; // fake
      this.qrcode_error = false;
    } else {
      this.qrcode_error = true;
    }
  }
}
