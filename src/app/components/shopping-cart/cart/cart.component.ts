import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { MessengerServiceService } from '../messenger-service.service';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;

  constructor(private cartService: CartServiceService,
              private msgService: MessengerServiceService) { }

  ngOnInit(): void {
    this.loadCartItems();
    this.handleSubscription();
  }

  handleSubscription() {
    this.msgService.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems()
  {
      this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
  })
}


  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}

