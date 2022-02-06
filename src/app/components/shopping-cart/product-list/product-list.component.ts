import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  wishList: number[] = [];

  constructor(
    private productService: ProductService,
    private wishListService: WishlistService
  ) {}

  // called when component is mounted, when component is fully loaded
  ngOnInit(): void {
    // this.productList = this.productService.getProducts();
    this.loadProducts();
  }

  private loadProducts() {
    let scope = this;
    this.productService.getProducts().subscribe({
      next(products) {
       scope.productList = products;
       scope.loadWishList();
      },
      error(msg: HttpErrorResponse) {
        scope._errorHandler(msg);
      },
      complete() {console.log('Products Loaded');}
    });
  }

  private loadWishList() {
    this.wishListService.getWishList().subscribe(productIds => {
      console.log(productIds);
      this.wishList = productIds
    });
  }

  private _errorHandler(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message)
    }
    else {
      console.error('Server Side Error: ', errorResponse);
    }
  }
}
