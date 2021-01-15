import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product[];
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.product = this.productService.getProducts();
  }

}
