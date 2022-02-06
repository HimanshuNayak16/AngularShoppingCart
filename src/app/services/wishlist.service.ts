import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { wishListUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishList() {
    return this.http.get(wishListUrl).pipe(
      map((result: any) => {
        let productIds: any[] = [];
        result.forEach((item: any) => productIds.push(item.id))
        return productIds;
      })
    )
  }

  addToWishList(productId: number) {
    return this.http.post(wishListUrl, { id: productId });
  }

  removeFromWishList(productId: number) {
    return this.http.delete(wishListUrl + '/' + productId );
  }
}
