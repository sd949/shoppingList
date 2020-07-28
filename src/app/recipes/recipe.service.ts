import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredint } from '../shared/ingredint.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();


  private recipes: Recipe[] =[
    new Recipe('test recipe1',
    'simple testing1',
    'https://kirbiecravings.com/wp-content/uploads/2020/01/keto-eggrolls-13.jpg',
[ new Ingredint('meat', 2),
new Ingredint('buttert', 6)
]
    ),
    new Recipe('test recipe2',
    'simple testing2',
    'https://kirbiecravings.com/wp-content/uploads/2020/01/keto-eggrolls-13.jpg',
    [ new Ingredint('coke', 2),
    new Ingredint('cola', 6)
    ]
    )
  ];
  constructor(private slService:ShoppingListService) { }
  getRecipes(){
    return this.recipes.slice();
  }
  addIngredintToShoppingList(ingredints:Ingredint[]){
    this.slService.addingredints(ingredints);

  }
  

  
}
