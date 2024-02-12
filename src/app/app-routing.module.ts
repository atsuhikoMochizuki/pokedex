import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

/** Attention, les routes sont lues de haut en bas.
 * On met donc les routes les plus spécifiques en haut
 * vers les plus générales en bas, sinon il peut y avoir 
 * des problèmes de lecture
 */
const routes: Routes = [
  {path:"pokemons", component:ListPokemonComponent},
  {path:"pokemon/:id", component:DetailPokemonComponent},
  {path:'', redirectTo: "pokemons",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
