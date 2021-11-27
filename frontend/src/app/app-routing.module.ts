import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderFormulariosComponent } from './home/slider-formularios/slider-formularios.component';
import { ListarBookComponent } from './task/listar-book/listar-book.component';
import { RegisterBookComponent } from './task/register-book/register-book.component';
import { SearchBookComponent } from './task/search-book/search-book.component';
import { UpdateBookComponent } from './task/update-book/update-book.component';

const routes: Routes = [
  {
    path:'',
    component:
  },
  {
    path:'listar-book',
    component: ListarBookComponent,
  },
  {
    path:'register-book',
    component: RegisterBookComponent,
  },
  {
    path:'search-book',
    component: SearchBookComponent,
  },
  {
    path:'update-book',
    component: UpdateBookComponent,
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
