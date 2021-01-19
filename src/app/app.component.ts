import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  // title = 'Enter Username';
  
  // name: string = 'default Name';
  
  loginForm: FormGroup;

//Angular Component LifeCycle

emailId: string;

password: string;

  ngOnInit(){

    //Initialization

      this.loginForm = new FormGroup({
        emailId : new FormControl(),
        password: new FormControl()
      });
  }

  // updateValue() {
  //   this.name ='Changed Name';
  // }

  submit(data){
    console.log(data);
  }
}
