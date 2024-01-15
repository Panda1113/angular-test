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
  @Input() data: any = [];
  product?: PhysicalProduct | EventProduct;

  constructor() { }

  ngOnInit() {
    this.product = this.data;
  }

  sayAboutMe() { }
}
