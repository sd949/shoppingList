import { Directive, HostListener, HostBinding } from '@angular/core';
import { isSyntheticPropertyOrListener } from '@angular/compiler/src/render3/util';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen=false;

  constructor() { }
  @HostListener('click') toggleOpen(){
    this.isOpen=!this.isOpen ;
  }

}
