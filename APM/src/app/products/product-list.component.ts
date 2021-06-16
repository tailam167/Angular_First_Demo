import { ProductServeice } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProducts } from './productinterface';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductServeice]
})

// Lesson 1: Component
export class ProductListComponent implements OnInit {
    // Building a template
    productPageTitle = 'Product List';
    filterByTxt = 'Filter by';
    filteredByTxt = 'Filtered by';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessaage: string = '';
    // Using subcription 
    sub!: Subscription;
    // Apply interface for setting specific type of filtered product list
    filteredProducts: IProducts[] = [];
    // Apply interface for setting specific type of product list
    products: IProducts[] = [];

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter: ' + value)
        this.filteredProducts = this.performFilter(value);
    }

    constructor(private productService: ProductServeice) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit process...');
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessaage = err,
            complete: () => console.log('Completed subscription !')
        });
    }

    performFilter(filteredBy: string): IProducts[] {
        filteredBy = filteredBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) =>
            product.productName.toLocaleLowerCase().includes(filteredBy));
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
}
