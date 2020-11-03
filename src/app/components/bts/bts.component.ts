import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.css']
})

export class btsComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];
share1img:boolean = false;
share2img:boolean = false;
ismergedisabled:boolean = true;
  ocrValidationSuccessfull: boolean = false;
  ocrValidationFailed: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  share1(){
    this.share1img = true;
  }
  share2(){
    this.share2img = true;
  }
  merge(){
    this.ismergedisabled = false;
  }
  ocrValidationS(){
    this.ocrValidationSuccessfull = true;
  }

  ocrValidationU(){
    this.ocrValidationFailed = true;
  }

}