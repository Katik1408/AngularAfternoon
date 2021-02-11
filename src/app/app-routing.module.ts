import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "../app/category/category.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "category",
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
