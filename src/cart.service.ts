import{Injectable} from '@angular/core';
import { Mykitchen1 } from './kichenitemsdupli/kitchenitemsdupli';
@Injectable({
    providedIn:'root'
})
export class CartService {
    items :Mykitchen1[]=[];
  
    addToCart(product) {
      this.items.push(product);
      //console.log(product);
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
}

