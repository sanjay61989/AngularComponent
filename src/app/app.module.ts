import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TestserviceService } from "../app/TestserviceService";
import { MainComponent } from './main/main.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component'
import { DataService } from './data.service';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,routing
  ],
  providers: [TestserviceService,DataService],
  bootstrap: [MainComponent]
})
export class AppModule { }
