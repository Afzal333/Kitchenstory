import { Component, OnInit ,OnChanges,SimpleChanges} from '@angular/core';
import { Mykitchen1 } from 'src/kichenitemsdupli/kitchenitemsdupli';
import{CartService} from '../cart.service';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  items=this.cartService.getItems();

cartTotal:number=0;
  constructor(private cartService :CartService,private route:Router) { }

  ngOnInit(): void {
    
    this.fun();
    
    
  }

  fun()
  {
    this.cartTotal=0;
    for(let index=0;index<this.items.length;index++)
    {
      this.cartTotal+= this.items[index].totalprice;
    }
    console.log(this.cartTotal);
  }
  increment(id:number)
 {
     const item=this.items.find(item => item.vegetableid ===id );
     item.vegetablequantity+=1;
     item.totalprice=item.vegetablecost*item.vegetablequantity;
     this.fun();
    
   }
  decrement(id:number)
  {
    const item=this.items.find(item => item.vegetableid ===id );
    item.vegetablequantity-=1;
    item.totalprice=item.vegetablecost*item.vegetablequantity;
    this.fun();
   }
   onDelete(name:string)
   {
     const index=this.items.findIndex(
       item=>item.vegetablename===name
     )
     if(index>=0){
       this.items.splice(index,1);
     }
     this.fun();
    }
    clearCart() {
      this.cartTotal=0;
      this.items=this.cartService.clearCart();
      
      
    }
    pay()
    {
      this.cartTotal=0;
      this.items=this.cartService.clearCart();
      this.route.navigate(['/payment']);
    }
}
