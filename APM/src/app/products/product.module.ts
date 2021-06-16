import { SharedModule } from './../shared/shared.module';
import { ConvertToSpace } from './../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes} from '@angular/router';
import { ProductDetailGuard } from './product-detail/product-detail.guard';

const appRouter: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpace
  ],
  imports: [
    RouterModule.forChild(appRouter),
    SharedModule
  ]
})
export class ProductModule { }
