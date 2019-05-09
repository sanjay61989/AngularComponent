import { Component, OnInit, ElementRef } from '@angular/core';
import { TestserviceService } from "../TestserviceService";
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message:string;
  constructor(private service: TestserviceService,private dataService:DataService) { }
  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.message = message)
  }
  newMessage() {
    this.service.changeMessage(this.message);
  }
  increment(){
    this.dataService.increment();
  }
  getCounter(){
    return this.dataService.getCounter();
  }
}
