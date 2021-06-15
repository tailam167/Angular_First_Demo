import { ProductServeice } from './../product.service';
import { IProducts } from './../productinterface';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetailPageTitle: string = 'Product Detail';
  product!: IProducts;
  errorMessaage: string = '';
  products: IProducts[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServeice) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.product = this.performFilter(id);
      },
      error: err => this.errorMessaage = err,
      complete: () => console.log('Completed subscription !')
    });
  }

  performFilter(id: number): IProducts {
    return this.products.filter((product: IProducts) =>
      product.productId == id)[0];
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
