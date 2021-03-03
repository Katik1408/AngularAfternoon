import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() messagefromparent;
  @Output() messagetoparent = new EventEmitter();
  data;
  constructor() {
    console.log('Inside constructor value is  ' + this.messagefromparent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inside onChanges value is  ' + this.messagefromparent);
  }
  ngDoCheck(): void {
    console.log('Inside DoCheck value is  ' + this.messagefromparent);
  }
  ngAfterContentInit(): void {
    console.log('Inside AfterContentInit value is  ' + this.messagefromparent);
  }
  ngAfterContentChecked(): void {
    console.log('Inside ContentChecked value is  ' + this.messagefromparent);
  }
  ngAfterViewInit(): void {
    console.log('Inside AfterVIewInit value is  ' + this.messagefromparent);
  }
  ngAfterViewChecked(): void {
    console.log('Inside AfterViewChecked value is  ' + this.messagefromparent);
  }
  ngOnDestroy(): void {
    console.log('Inside onDestroy value is  ' + this.messagefromparent);
  }

  ngOnInit(): void {
    console.log('Inside onInit value is  ' + this.messagefromparent);
  }

  sendData() {
    this.messagetoparent.emit(this.data);
  }
}
