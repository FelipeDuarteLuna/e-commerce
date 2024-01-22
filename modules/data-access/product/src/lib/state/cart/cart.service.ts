import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private CartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.CartSubject.asObservable();

  productQuantity$ = this.CartSubject.pipe(map((products) => products.length));

  addToCart(product: Product): void {
    const cart = this.CartSubject.getValue();
    this.CartSubject.next([...cart, product]);
    // eslint-disable-next-line no-console
    console.log(this.CartSubject.getValue());
  }
}
