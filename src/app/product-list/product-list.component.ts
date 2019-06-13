import { Component, OnInit } from '@angular/core';
import { Product} from '../product'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products = [{
      name: "iPhone",
      description :"Cool Phone"
      },
      {
      name: "One Plus",
      description :"",
      price:8000
      }
];
  constructor() { }

  ngOnInit() {
  }
  share(){
    alert("Your Product has been shared");
  }
  onNotify(){
    alert("You will be notified once the product will be on sale")
  }

}