import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { OverviewComponent } from './overview/overview.component';

  
const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'overview', component : OverviewComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }