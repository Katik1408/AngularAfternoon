import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from '../app/category/category.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Comp1Component } from './comp1/comp1.component';
import { StudentComponent } from './student/student.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'sibling',
    component: SiblingComponent,
  },
  {
    path: 'component1',
    component: Comp1Component,
  },
  {
    path: 'students',
    component: StudentComponent,
  },
  {
    path: 'students/createstudent',
    component: CreatestudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
