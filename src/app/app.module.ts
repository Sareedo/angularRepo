import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Route,RouterModule}from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './products/list.component';
import { DetailsComponent } from './products/details.component';
import { NewProductComponent } from './products/new-product.component';




@NgModule({
  
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    NewProductComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    RouterModule.forRoot([{path:'product',component:ListComponent}]),
    RouterModule.forRoot([{path:'registar',component:NewProductComponent}]),
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
