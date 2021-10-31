import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Mykitchen1 } from "src/kichenitemsdupli/kitchenitemsdupli";
import{KitchenItemDupliService} from 'src/kichenitemsdupli/kitchenitem.dupliservice';
import { KichenitemsdupliComponent } from 'src/kichenitemsdupli/kichenitemsdupli.component';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  viewtbl:Mykitchen1[]=[];
  constructor(private route:Router,private aroute:ActivatedRoute,private kitchenservice:KitchenItemDupliService) { }

  ngOnInit(): void {
    this.viewtbl=this.kitchenservice.getItems();

  }
  deleteItem(name:string)
  {
    const index=this.viewtbl.findIndex(
      item=>item.vegetablename===name
    )
    if(index>=0){
      this.viewtbl.splice(index,1);
    }
  }
  onDelete(name:string)
    {
      if(window.confirm("delete"))
      {
        this.deleteItem(name);
        this.route.navigate(['/view']);
      }
    }

}
