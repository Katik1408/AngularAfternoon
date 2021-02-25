import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from '../app/category/category.component';
import { ParentComponent } from './parent/parent.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
