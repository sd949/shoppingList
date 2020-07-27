import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredint } from 'src/app/shared/ingredint.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredint>();
  


  constructor() { }

  ngOnInit(): void {
  }
onAddItem(){
  const ingName=this.nameInputRef.nativeElement.value;
  const ingAmount=this.amountInputRef.nativeElement.value;
  const newIngredint=new Ingredint(ingName,ingAmount);
  this.ingredientAdded.emit(newIngredint);

}
}
