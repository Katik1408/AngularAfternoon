import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  username;

  datafromchild;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  recieveData($event) {
    this.datafromchild = $event;
  }
  sendMessage() {
    this.dataService.changeMessage(this.username);
  }
}
