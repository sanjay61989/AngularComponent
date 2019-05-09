import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class TestserviceService {
  private messageSource = new BehaviorSubject('Hello from service');
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('https://gorest.co.in/public-api/users?_format=json&access-token=mT8JNMyWCG0D7waCHkyxo0Hm80YBqelv5SBL');
  }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
