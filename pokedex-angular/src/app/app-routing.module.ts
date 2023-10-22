import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterPokemonComponent } from './register-pokemon/register-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "register", component: RegisterPokemonComponent },
  { path: "edit/:id", component: EditPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
