import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
LoginSuccessful : boolean;
LoginFailed : boolean = false;
isSingleClick: Boolean = true;     

files: any;
  constructor() { }

  ngOnInit(): void {
    this.LoginSuccessful = true;
  }
  singleClick(){
    this.isSingleClick = true;
         setTimeout(()=>{
             if(this.isSingleClick){
                 this.LoginSuccessful = false;
             }
          },250)
 }
 doubleClick(){
          this.isSingleClick = false;
          this.LoginSuccessful = true;
          this.LoginFailed = true;
          console.log("Failed!!!")
 }
onChange(event) {
  this.files = event.srcElement.files;
  console.log(this.files);
}
LoginAgain(){
  this.LoginSuccessful = true;
  this.LoginFailed = false;
}
}
