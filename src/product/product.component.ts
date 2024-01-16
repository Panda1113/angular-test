import { Component, Input, OnInit } from '@angular/core';
import { EventProduct } from '../data/event-product';
import { PhysicalProduct } from '../data/physical-product';
import { ProductType } from '../data/product-type.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  readonly ProductType = ProductType;
  @Input() product?: PhysicalProduct | EventProduct;
  isSail : boolean = false;
  quantity : number = 1;
  constructor() {}

  ngOnInit() {
    if (this.product?.type === ProductType.PHYSICAL) {
      this.quantity = this.product.quantity;
    }
  }

  handleClickBuyButton(){
    --this.quantity
    this.isSail = true
    if (this.product?.type === ProductType.PHYSICAL) {
      this.product.quantity = this.quantity
    }
  }

  sayAboutMe() {}
}
