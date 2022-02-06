import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from '../models/product';
import { catchError, Observable } from 'rxjs';
import { productsUrl } from './../../config/api';

// const apiUrl = "http://localhost:3000/products";
/**
 * Provided throughtout the entire application
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //TODO: Populate products from an API
  // private _products: Product[] = [];

  // git: npm i -g json-server
  // cmd: json-server db.json

  constructor(private http: HttpClient) {}

  // TODO: Populate products from an API and return an observable
  getProducts(): Observable<Product[]> {
    // return this._products;
    return this.http.get<Product[]>(productsUrl);
  }
}

/*
new Product(1, 'Product1', 'This is the description of Product 1. This product is kool !!', 500, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQMOiWHXLLw_ci07S9sJh4X5CsHoPISmxMqw&usqp=CAU'),
new Product(2, 'Product2', 'This is the description of Product 2. This product is kool !!', 400, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToVFiYjprFp0DyI7LrvdH_Bgjf6CIePsGcXA&usqp=CAU' ),
new Product(3, 'Product3', 'This is the description of Product 3. This product is kool !!', 600, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxtg7gCb5FIwel-hvF78NbzbKOwdJfQb1lVnvhIpDWF8ZZWRkIrhesh-o8sL6AABtZofgq6Uen&usqp=CAc'),
new Product(4, 'Product4', 'This is the description of Product 4. This product is kool !!', 900, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSswH3hWH_nm6bQpF-_sKcy4Lz7loKMyHX--cfnrrUit9qNPm0LNh3MB7vAq9FE9pZAZNEaT6k&usqp=CAc'),
new Product(5, 'Product5', 'This is the description of Product 5. This product is kool !!', 800, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbl4a3NHSz2mRROBSLX7EGINMX00FYqGeuWg&usqp=CAU'),
new Product(6, 'Product6', 'This is the description of Product 6. This product is kool !!', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5g0wtKLiEFtjK9u3p75s49bOOWt5epXsvqg&usqp=CAU')
*/

