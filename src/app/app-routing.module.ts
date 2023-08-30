import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { WomenProductsComponent } from './women-products/women-products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'men',component:MenComponent},
  {path:'menproducts/:id',component:MenProductsComponent},
  {path:'women',component:WomenComponent},
  {path:'womenproducts/:id',component:WomenProductsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
