import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // title = 'Enter Username';

  // name: string = 'default Name';

  loginForm: FormGroup;
  submitted = false;

  //Angular Component LifeCycle

  emailId;

  password;

  ngOnInit() {
    //Initialization
    //FormBuilder
    this.loginForm = new FormGroup({
      emailId: new FormControl('', Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  // updateValue() {
  //   this.name ='Changed Name';
  // }

  submit(data) {
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    console.log(data);
  }
}
