import { Component, OnInit} from '@angular/core';
import { IProduct } from './product.component';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'beer-list.component.html',
    styleUrls: ['beer-list.component.css']
})

export class BeerListComponent implements OnInit {
    pageTitle: string = 'Craft Beer Selection';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){
        this._productService.getProducts()
        .subscribe( products => this.products = products,
        error => this.errorMessage = <any>error); 
    }

    ngOnInit(): void {
        console.log('sup?');
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    onRatingClicked(message: string): void {
        this.pageTitle = 'Beer List: ' + message;
    }
}