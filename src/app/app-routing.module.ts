import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/** Attention, les routes sont lues de haut en bas.
 * On met donc les routes les plus spécifiques en haut
 * vers les plus générales en bas, sinon il peut y avoir 
 * des problèmes de lecture
 */
const routes: Routes = [
  {path:'', redirectTo: "pokemons",pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
