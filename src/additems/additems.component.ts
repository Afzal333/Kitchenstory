import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/Router';
import {Item} from './add-items';
import { Mykitchen1 } from "src/kichenitemsdupli/kitchenitemsdupli";
import{KitchenItemDupliService} from 'src/kichenitemsdupli/kitchenitem.dupliservice';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
vegetableid:number;
vegetablename:string;
vegetablecost:number;
vegetableimg:string;
vegetablequantity:number;
totalprice:number;

items:Mykitchen1[]=[];
item=new Item();
  constructor(private itemservice:KitchenItemDupliService,private route:Router) { }

  ngOnInit(): void {
    this.items=this.itemservice.getItems();
  }
  //save(userForm:)
onItemAdd(userForm:NgForm)
{
  let a={
    vegetableid:+this.item.vegetableid,
    vegetablename:this.item.vegetablename,
    vegetablecost:+this.item.vegetablecost,
    vegetableimg:this.item.vegetableimg,
    vegetablequantity:+this.item.vegetablequantity,
    totalprice:+this.item.totalprice
  }
  this.items.push(a);
  console.log(a);
  alert("Item added");
  this.route.navigate(['./view']);
}
}
