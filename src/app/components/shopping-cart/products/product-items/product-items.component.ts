import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartServiceService } from '../../cart-service.service';
import { MessengerServiceService } from 'src/app/components/shopping-cart/messenger-service.service';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  @Input() product:Product;
  @Input() index:number;
  constructor(private cartService: CartServiceService,
              private msgService: MessengerServiceService) { }

  ngOnInit(): void {
  }

  handleAddToCart()
  {
      this.cartService.addProductToCart(this.product).subscribe(() => {
      this.msgService.sendMsg(this.product);
    })
  }
}
