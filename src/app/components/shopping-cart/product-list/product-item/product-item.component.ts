import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  // this productItem is coming from ParentComponent(ProductListComponent) and storing the value in productItem property
  // which we can access inside ChildComponent(ProductItemComponent)

  @Input() productItem: Product = new Product(1, 'Product 1');
  @Input() addedToWishList: boolean = false;

  constructor(
    private messengerService: MessengerService,
    private cartService: CartService,
    private wishListService: WishlistService
  ) { }

  ngOnInit(): void {

  }

  // Clicking on Add to cart button
  // Triggers change in subject
  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.messengerService.sendMsg(this.productItem);
    });
    // this.messengerService.sendMsg(this.productItem);
  }

  handleAddToWishList() {
    this.wishListService.addToWishList(this.productItem.id).subscribe(() => {
      this.addedToWishList = true;
    });
  }

  handleRemoveFromWishList() {
    this.wishListService.removeFromWishList(this.productItem.id).subscribe(() => {
      this.addedToWishList = false;
    });
  }
}
