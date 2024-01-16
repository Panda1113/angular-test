import { Component } from '@angular/core';
import { PRODUCTS } from '../data/mock-products';
import { ProductType } from '../data/product-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly ProductType = ProductType;
  title = 'angular-quiz';
  showProductList: boolean = false;
  sailProducts: any = [];
  handleClickProductListButton() {
    this.showProductList = !this.showProductList
  }

  handleResponseToChild($event: any) {
    const date = new Date();
    const sail_date = date.toLocaleDateString() + ' | ' + date.toLocaleTimeString();
    $event.sail_date = sail_date;
    this.sailProducts = [...this.sailProducts, $event];
  }

  products = PRODUCTS;
}
