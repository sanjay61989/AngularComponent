import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  public data: any; 
  constructor(_dataService: DataService) {  
    this.data = _dataService.getOption();  
    console.log(this.data);   
  }  
  ngOnInit() {
  }
}
