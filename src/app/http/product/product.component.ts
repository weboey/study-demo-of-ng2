import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http ,Headers}    from '@angular/http';
import {ProductService} from "./service/product.service";
import {Product} from "./service/product.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Observable<Product[]>;

  constructor(private http:Http,private productService:ProductService) { }

  ngOnInit() {
    //this.productService.getProducts().subscribe( data => {this.products = data});
    this.products = this.productService.getProducts();

    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    )
  }

}
