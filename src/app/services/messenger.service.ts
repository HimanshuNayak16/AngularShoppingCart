import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private _subject = new Subject<Product>();

  constructor() { }

  sendMsg(product: Product) {
    // console.log(product);
    this._subject.next(product); // Triggering an event
  }

  getMsg(): Observable<Product> {
    return this._subject.asObservable();
  }
}
