import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];
  files: any;
  isPasswordhidden: boolean = true;
  isSpinnerhidden: boolean = true;
  match: boolean = false;
  password = "P@$$word"

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    // this.files = event.srcElement.files;
    // if(this.files){
      this.isSpinnerhidden = false;
    setTimeout(() => {
      console.log('hide');
      this.isSpinnerhidden = true;
      this.isPasswordhidden = false;
    }, 2000);
    

 
  }

  focusOutFunction(){
    this.match = true;
  }
}