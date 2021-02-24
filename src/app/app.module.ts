import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { BackgroundDirective } from 'src/app/directives/background.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    CategoryComponent,
    BackgroundDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//Injectible --> Services
