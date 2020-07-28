import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredint } from 'src/app/shared/ingredint.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;

  


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
onAddItem(){
  const ingName=this.nameInputRef.nativeElement.value;
  const ingAmount=this.amountInputRef.nativeElement.value;
  const newIngredint=new Ingredint(ingName,ingAmount);
  this.slService.addIngredint(newIngredint);
 

}
}
