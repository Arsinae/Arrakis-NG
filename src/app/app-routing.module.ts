import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';


const routes: Routes = [
  {path: '', redirectTo: '/components', pathMatch: 'full'},
  {path: 'components', component: ComponentsComponent, data: {animation: 'components'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
