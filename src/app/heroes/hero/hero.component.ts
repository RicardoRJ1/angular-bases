import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name : string = "iron man";
  public age : number = 45;

  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string{

    return `${this.name} ${this.age}`
  }

  public changeHero() : void{
    this.name = 'Spider-man';
  }

  public changeAge(): void{
    this.age = 25;
  }

  public resetForm(): void{
    this.name = ' ironman';
    this.age = 45;

  }

}
