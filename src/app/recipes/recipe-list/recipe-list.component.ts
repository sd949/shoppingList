import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('test recipe','simple testing','https://kirbiecravings.com/wp-content/uploads/2020/01/keto-eggrolls-13.jpg'),
    new Recipe('test recipe','simple testing','https://kirbiecravings.com/wp-content/uploads/2020/01/keto-eggrolls-13.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
