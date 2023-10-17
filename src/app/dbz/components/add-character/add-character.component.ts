import { Component, EventEmitter,  Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //emit sirve para emitir algo, en este caso vamos a emitir un Character para ingresarlos en el main-page-component

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{

    console.log(this.character);
    if(this.character.name.length ===0 ){
      return;
    }
    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;
    this.character = {name:'',power:0};
  }

}
