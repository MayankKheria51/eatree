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
  isRegisterhidden: boolean = true;
  RegisterSuccessful: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
     this.files = event.srcElement.files;
     console.log(this.files);
    // if(this.files){
      this.isSpinnerhidden = false;
    setTimeout(() => {
      console.log('hide');
      this.isSpinnerhidden = true;
      this.isPasswordhidden = false;
      if(this.files[0].name.split('.')[0] === 'Aug'){
        this.password = 'Password';
        this.match = false;
        this.isRegisterhidden = true;
      } else {
        this.password = 'P@$$word';
        this.match = true;
        this.isRegisterhidden = false;
      }
    }, 2000);
    
   
 
  }

  Register(){
    this.RegisterSuccessful = true;
    console.log(this.RegisterSuccessful);
  }

  focusOutFunction(){
    this.match = true;
  }
}