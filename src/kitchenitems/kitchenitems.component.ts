import { Component, OnInit } from '@angular/core';
import{Mykitchen} from "./kitchenitems";
import { KitchenService } from './kitchenitems.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kitchenitems',
  templateUrl: './kitchenitems.component.html',
  styleUrls: ['./kitchenitems.component.css']
})
export class KitchenitemsComponent implements OnInit {

  
  _searchTerm:string;
  searchedItems:Mykitchen[]=[];

  kitchenitems:Mykitchen[]=[
    
  ];
  
 get searchTerm():string{
   return this._searchTerm;
 }
 set searchTerm(value:string)
 {
   this._searchTerm=value;
   this.searchedItems=this.searchTerm?this.searchItem(this.searchTerm):this.kitchenitems;
 }
 searchItem(searchby:string):Mykitchen[]{
   searchby=searchby.toLocaleLowerCase();
  return this.kitchenitems.filter((kitchen:Mykitchen)=>kitchen.vegetablename.toLocaleLowerCase().indexOf(searchby)!==-1);
 }
 constructor(private kichenservice:KitchenService,private route:Router) { }

  ngOnInit(): void {
    this.kitchenitems=this.kichenservice.getItems();
    this.searchedItems=this.kitchenitems;
  }
 fun():void
 {
   window.alert('Please Login to purchase');
   this.route.navigate(['/login']);
 }
}
