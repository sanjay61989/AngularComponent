import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {  
  private data = {};
  setOption(option: string, value: any) {
    this.data[option] = value;
  }
  getOption() {
    return this.data;
  }
  private counter: number = 0;
  increment() {
    this.counter++;
    console.log(this.counter);
  }
  decrement() {
    this.counter--;
    console.log(this.counter);
  }
  getCounter() {
    return this.counter;
  }
}
