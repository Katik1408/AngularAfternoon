import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
})
export class SiblingComponent implements OnInit {
  constructor(private dataService: DataService) {
    
  }

  message: string;

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(
      (data) => (this.message = data),
      (err) => console.log(err)
    );
  }
}
