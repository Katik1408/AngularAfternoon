import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css'],
})
export class CreatestudentComponent implements OnInit {
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {}
  submit(value) {
    // console.log(name);
    // console.log(age);
    // console.log(place);
    console.log(value);
    this.crudService.createNewStudent(value).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
