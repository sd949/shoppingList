import { Injectable, EventEmitter } from '@angular/core';
import { Ingredint } from '../shared/ingredint.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredintChanged=new EventEmitter<Ingredint[]>();
  private ingredints:Ingredint[]=[
    new Ingredint('apple',5),
    new Ingredint('mango',52)
  ]

  constructor() { }
  getIngredints(){
    return this.ingredints.slice();
  }
  addIngredint(ingredint:Ingredint){
    this.ingredints.push(ingredint);
    this.ingredintChanged.emit(this.ingredints.slice());
  }
  addingredints(ingredints:Ingredint[]){

    //for (let ingredint of ingredints){
    //  this.addIngredint(ingredint)
    //}
    this.ingredints.push(...ingredints);
    this.ingredintChanged.emit(this.ingredints.slice());
  }
}
