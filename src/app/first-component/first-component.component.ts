import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  public size: number;  
  public square: number;  

  constructor(_dataService: DataService) {  
      this.size = 16;  
      this.square = Math.sqrt(this.size);  

      _dataService.setOption('size', this.size);  
      _dataService.setOption('square', this.square);  
  }  
  ngOnInit() {
  }
}