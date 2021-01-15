import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService
 {
  // private cartItems: CartItem[] =
  // [
  //   new CartItem(1, new Product(1, 'Nike', 'None', 10000, ''), 2),
  //   new CartItem(1, new Product(2, 'Nike2', 'None', 5000, ''), 4),
  //   new CartItem(1, new Product(3, 'Nike3', 'None', 4600, ''), 1)

  // ];
  // cartUrl = 'https://shopozon-fe654.firebaseio.com/cart.json';
  cartUrl='https://shopozon2-default-rtdb.firebaseio.com/cart.json';
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {

      return this.http.get<CartItem[]>(this.cartUrl).pipe(
      map((result: any[]) => {
        console.log(result);

        const cartItems: CartItem[] = [];

        // tslint:disable-next-line: forin
        for (const item in result) {
          let productExists = false;

          for (const i in cartItems) {
            if (cartItems[i].productId === result[item].product.id) {
              cartItems[i].qty++;
              productExists = true;
              break;
            }
          }

          if (!productExists)
          {
            cartItems.push(new CartItem(result[item].id, result[item].product));
          //  cartItems.push(...result[item]);
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(this.cartUrl, { product });
  }

  removeProductFromCart(product:Product)
  // : Observable<any>
  {
    console.log(product);

    // return this.http.delete(this.cartUrl);
  }
}

