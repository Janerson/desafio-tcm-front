import { LegislacoesComponent } from './legislacoes/legislacoes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MunicipiosComponent } from './municipios.component';

const routes: Routes = [
  {
    path: '',
    component: MunicipiosComponent,
   
  },
  { path: ':codIbge/legislacoes', component: LegislacoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipiosRoutingModule {}
