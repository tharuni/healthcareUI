import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';


const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
