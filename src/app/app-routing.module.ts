import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

/** Attention, les routes sont lues de haut en bas.
 * On met donc les routes les plus spécifiques en haut
 * vers les plus générales en bas, sinon il peut y avoir 
 * des problèmes de lecture
 */
const routes: Routes = [
  {path:'', redirectTo: "login",pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
