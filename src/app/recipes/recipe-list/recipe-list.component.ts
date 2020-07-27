import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import{Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('test recipe1','simple testing1','https://kirbiecravings.com/wp-content/uploads/2020/01/keto-eggrolls-13.jpg'),
    new Recipe('test recipe2','simple testing2','https://kirbiecravings.com/wp-content/uploads/2020/01/keto-eggrolls-13.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe);

  }
}
