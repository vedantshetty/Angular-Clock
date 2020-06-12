import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    hour: number; 
    min: number;  
    sec: number;
  constructor() { }

  ngOnInit(): void {
      let d = new Date();
      this.hour = d.getHours();
      this.min = d.getMinutes();
      this.sec = d.getSeconds();
  }

}
