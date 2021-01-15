import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from '../../cart-service.service';
import { MessengerServiceService } from '../../messenger-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:any;
  constructor(private cartService:CartServiceService,
    private msgService:MessengerServiceService) { }

  ngOnInit(): void {
  }

  deleteItem(){
    this.cartService.removeProductFromCart(this.cartItem);}

}
