import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public deleteHero?: string; //variable creada para mostrar que heroe se borra ya que pop retorna un string o undefinided

  public removeLastHero(): void{
    this.deleteHero = this.heroName.pop()
  }
}
