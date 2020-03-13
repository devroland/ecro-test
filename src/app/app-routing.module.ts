import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductPageComponent } from './components/add-product-page/add-product-page.component';


const routes: Routes = [
  {
    path: '',
    component: AddProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
