import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private messengerService: MessengerService, private cartService: CartService) {}

  cartItems: any[] // CartItem[] 
  = [
    // {id: 1, productName: 'Test 1',qty: 4, price: 100},
    // {id: 2, productName: 'Test 2',qty: 2, price: 50},
    // {id: 3, productName: 'Test 3',qty: 1, price: 150},
    // {id: 4, productName: 'Test 4',qty: 3, price: 200}
  ];

  cartTotal = 0;

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    // subscribe to Observable to listen only when trigger is happening by Subject
    this.messengerService.getMsg().subscribe((product: Product) => {
      // this.addProductToCart(product);
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
      // console.log(items);      
      this.cartItems = items;
      // calculate cart total after getting updated value of this.cartItems
      this.calculateCartTotal();
    })
  }

  calculateCartTotal() {
    this.cartTotal  = 0;
    this.cartItems.forEach((cartItem: CartItem) => {
      this.cartTotal += cartItem.qty * cartItem.price;
    })
  }

  // addProductToCart(product: Product) {
  //   const productItemIndex = this.cartItems.findIndex(cart => cart.productName === product.name);
  //   console.log(productItemIndex);
  //     if (productItemIndex < 0) {
  //       this.cartItems.push({
  //         productId: product.id,
  //         productName: product.name,
  //         qty: 1,
  //         price: product.price
  //       });
  //     }
  //     else {
  //       this.cartItems[productItemIndex].qty++;
  //     }
  //     console.log(this.cartItems);
  //     this.cartTotal += 1 * product.price;
  // }

  // addProductToCart(product: Product) {
  //   let scope = this;

  //   this.cartService.getCartItems().subscribe({
  //     next(cartItems) { 
  //       scope.cartItems = cartItems;
  //     },
  //     error(err) { console.error(err) },
  //     complete() {
  //       const cartItem = new CartItem(product.id, product);
  //       scope.cartService.addCartItem(cartItem)
  //       // let cartItems = scope.cartItems;
  //       // let productItemIndexInCart = -1;
  //       // for (let i = 0; i < cartItems.length; i++) {
  //       //   let cartItem = cartItems[i]; 
  //       //   console.log(cartItem);
  //       //   if (cartItem.id === product.id) {
  //       //     productItemIndexInCart = i;
  //       //     scope.cartService.getCartItems()
  //       //   }
  //       //   console.log('Completed');
          
  //       // }
  //     }
  //   });
  //   // console.log(productItemIndexInCart);
  //   // const cartItem = new CartItem(product.id, product);

  // }

  // addProductToCart(product: Product) {
  //   if (this.cartItems.length === 0) {
  //     this.cartItems.push({
  //       productId: product.id,
  //       productName: product.name,
  //       qty: 1,
  //       price: product.price,
  //     });
  //   }
  //   else {
  //     for (let index in this.cartItems) {
  //       if (this.cartItems[index].productId === product.id) {
  //         this.cartItems[index].qty++;
  //       } else {
  //         this.cartItems.push({
  //           productId: product.id,
  //           productName: product.name,
  //           qty: 1,
  //           price: product.price,
  //         });
  //       }
  //     }
  //   }
  // }


  // addProductToCart(product: Product) {
  //   let productExists = false;

  //   for (let index in this.cartItems) {
  //     if (this.cartItems[index].productId === product.id) {
  //       this.cartItems[index].qty++;
  //       productExists = true;
  //       break;
  //     }
  //   }

  //   if (!productExists) {
  //     this.cartItems.push({
  //       productId: product.id,
  //       productName: product.name,
  //       qty: 1,
  //       price: product.price,
  //     });
  //   } else {
  //   }

  //   this.cartTotal = 0;

  //   this.cartItems.forEach((cartItem) => {
  //     this.cartTotal += cartItem.price * cartItem.qty;
  //   });
  // }
}
