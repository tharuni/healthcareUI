import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialRoutingModule } from './material-routing.module';
import { CdkTableModule } from '@angular/cdk/table';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';




const COMPONENTS: any[] = [
  AutocompleteComponent,
];
const COMPONENTS_DYNAMIC: any[] = [
];

@NgModule({
  imports: [SharedModule, CdkTableModule, MaterialRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class MaterialModule {}
