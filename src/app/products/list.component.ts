import { Component } from '@angular/core';


@Component({
    selector: "listTag",
    templateUrl:"./list.component.html" // linked template
})
export class ListComponent{
    products:any[]=[
        {
         "pname":"Vitz",
         "year":"2002",
         "price":"10000",
         "imageUrl":"assets/vitz.jpg"
        },
        {
            "pname":"Prado",
            "year":"2019",
            "price":"140000",
            "imageUrl":"assets/prado.jpg"
        }
    ];

    constructor(){ }
}