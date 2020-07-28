import { Component, OnInit } from '@angular/core';
import {Ingredint} from '../shared/ingredint.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredints:Ingredint[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredints=this.slService.getIngredints();
    this.slService.ingredintChanged.subscribe(
      (ingredints:Ingredint[])=>{
      this.ingredints=ingredints;
      }
    )
  }

}
