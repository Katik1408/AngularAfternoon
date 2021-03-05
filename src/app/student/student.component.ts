import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(private crudService: CrudService , private rotuer : Router) {}
  students;
  ngOnInit(): void {
    this.crudService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
  openNewStudentComponent(){
      this.rotuer.navigateByUrl('students/createstudent');
  }
}
