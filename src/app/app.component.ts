import { Component, OnInit } from '@angular/core';
import { TestserviceService } from "./TestserviceService";
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  message: any;
  //service: TestserviceService;
  constructor(private service: TestserviceService, private dataService: DataService) {
  }
  dispData(data: any) {
    console.log(data);
  }
  ngOnInit() {
    this.service.currentMessage.subscribe((message: any) => this.message = message)
  }
  getCounter(){
    return this.dataService.getCounter();
  }
  decrement(){
    return this.dataService.decrement();
  }
}
