import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BoarderCardDirective } from './boarder-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';

const pokemonRoutes: Routes = [
  {path:"pokemons", component:ListPokemonComponent},
  {path:"pokemon/:id", component:DetailPokemonComponent},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BoarderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
