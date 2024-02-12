import { Component,OnInit} from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';


@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected! : Pokemon|undefined;
  

  ngOnInit(): void {
      console.table(this.pokemonList[0]);
  }

  selectPokemon(pokemonId:string):void{
    
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon=>pokemon.id == +pokemonId ) ;
    if(pokemon){
      console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Le pokemon n'existe pas`);
      this.pokemonSelected = undefined;
    }
    
    
  }
  
}
