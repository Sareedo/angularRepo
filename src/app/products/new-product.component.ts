import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  prodName:string;
  prodYear:number;
  prodPrice:number;
  prodImage:string;
   
  constructor() { }

  ngOnInit() {
  }

}
