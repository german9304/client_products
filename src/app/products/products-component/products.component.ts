import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe({
      next(result) {
        console.log(result);
      },
      error(error) {
        console.log(error)
      }
    });
  }

}
