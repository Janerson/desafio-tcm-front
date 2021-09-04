import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MunicipiosComponent } from './municipios.component';
import { MunicipiosRoutingModule } from './municipios-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MunicipiosComponent],
  imports: [
    CommonModule,
    MunicipiosRoutingModule,
    SharedModule
  ]
})
export class MunicipiosModule { }
