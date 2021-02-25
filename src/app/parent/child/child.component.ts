import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() messagefromparent;
  @Output() messagetoparent = new EventEmitter();
  data;
  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.messagetoparent.emit(this.data);
  }
}
