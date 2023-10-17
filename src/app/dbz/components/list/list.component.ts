import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

 @Input() //signifa que nuestra property va a recibir algo del mundo externo
 public characterList: Character[] = [{
  name: 'Trunks',
  power: 10
 }]

 //onDelete = Index value : number
 @Output()
 public onDelete:EventEmitter<string> = new EventEmitter();

 onDeleteCharacter(id?: string):void {
  if(!id){
    return;
  }
  this.onDelete.emit(id);
 }

}
