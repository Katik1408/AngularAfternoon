import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked , OnDestroy{
  order = 1;

  constructor() {
    console.log('Inside constructor and order is ' + this.order);
    this.order++;
  }
  ngOnDestroy(): void {
    console.log('Inside onDestroy and order is ' + this.order);
    this.order++;
  }
  ngOnChanges(): void {
    console.log('Inside onChanges and order is ' + this.order);
    this.order++;
  }
  ngDoCheck(): void {
    console.log('Inside DOCheck and order is ' + this.order);
    this.order++;
  }
  ngAfterContentInit(): void {
    console.log('Inside AfterContentInit and order is ' + this.order);
    this.order++;

  }
  ngAfterContentChecked(): void {
    console.log('Inside AfterContentChecked and order is ' + this.order);
    this.order++;
  }
  ngAfterViewInit(): void {
    console.log('Inside AfterViewInit and order is ' + this.order);
    this.order++;
  }
  ngAfterViewChecked(): void {
    console.log('Inside AfterViewChecked and order is ' + this.order);
    this.order++;
  }

  ngOnInit(): void {
    console.log('Inside onInint and order is ' + this.order);
    this.order++;
  }
}
