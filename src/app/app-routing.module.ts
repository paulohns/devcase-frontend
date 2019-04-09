import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendaListComponent } from './venda-list/venda-list.component';
import { VendaEditComponent } from './venda-edit/venda-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/venda-list', pathMatch: 'full' },
  {
    path: 'venda-list',
    component: VendaListComponent
  },
  {
    path: 'venda-add',
    component: VendaEditComponent
  }
  /*,
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }