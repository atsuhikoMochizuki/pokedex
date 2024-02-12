import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [
  {path:"/pokemons", component:ListPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
