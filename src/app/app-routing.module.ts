import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './admin/overview/overview.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './admin/inicio/inicio.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'overview', component: OverviewComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
