import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // title = 'Enter Username';

  // name: string = 'default Name';

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  submitted = false;

  //Angular Component LifeCycle
  ngOnInit() {
    //Initialization
    //FormBuilder

    this.loginForm = this.formBuilder.group({
      emailId: ["", Validators.required],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });

    // this.loginForm = new FormGroup({
    //   emailId: new FormControl("", Validators.required),
    //   password: new FormControl("", [
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(20),
    //   ]),
    // });
  }

  //<a >Click </a>


  get f() {
    return this.loginForm.controls;
  }

  // updateValue() {
  //   this.name ='Changed Name';
  // }

  submit(data) {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(data);
  }
}
