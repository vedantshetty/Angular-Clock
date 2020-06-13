import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    hour: string; 
    min: string;  
    sec: string;
  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
          let d = new Date();
          this.hour = ("0" + d.getHours()).slice(-2);
          this.min = ("0" + d.getMinutes()).slice(-2);
          this.sec = ("0" + d.getSeconds()).slice(-2);
      }, 1000);
  }
}
