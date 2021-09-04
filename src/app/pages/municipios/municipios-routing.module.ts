import { LegislacoesComponent } from './legislacoes/legislacoes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MunicipiosComponent } from './municipios.component';

const routes: Routes = [
  {
    path: '', pathMatch:'full',
    component: MunicipiosComponent,
  },
  { path: ':codIbge/legislacao', component: LegislacoesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipiosRoutingModule {}