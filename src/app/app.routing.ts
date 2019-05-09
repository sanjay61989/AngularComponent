import { ModuleWithProviders } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
  
const appRoutes: Routes = [  
    { path: '', component: FirstComponentComponent },  
    { path: 'second', component: SecondComponentComponent },  
];  
  
export const routing: ModuleWithProviders =  
    RouterModule.forRoot(appRoutes);  