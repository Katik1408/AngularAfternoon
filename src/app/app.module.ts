import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { BackgroundDirective } from 'src/app/directives/background.directive';
import { CustomifDirective } from './directives/customif.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Comp1Component } from './comp1/comp1.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    CategoryComponent,
    BackgroundDirective,
    CustomifDirective,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    Comp1Component,
    StudentComponent,
    CreatestudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//Injectible --> Services
