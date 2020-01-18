import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ThemeComponent } from './theme/theme.component';


const routes: Routes = [
  {path: '', redirectTo: '/components', pathMatch: 'full'},
  {path: 'components', component: ComponentsComponent, data: {animation: 'components'}},
  {path: 'theme', component: ThemeComponent, data: {animation: 'theme'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
