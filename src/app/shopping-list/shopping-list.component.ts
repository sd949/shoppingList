import { Component, OnInit } from '@angular/core';
import {Ingredint} from '../shared/ingredint.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  indredients:Ingredint[]=[
    new Ingredint('apple',5),
    new Ingredint('mango',52)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
