import { Component, Input, OnInit } from '@angular/core';
import { PhysicalProduct } from '../data/physical-product';

@Component({
  selector: 'app-physical-product',
  templateUrl: './physical-product.component.html',
  styleUrls: ['./physical-product.component.css'],
})
export class PhysicalProductComponent implements OnInit {
  @Input() data:any = [];
  product?: PhysicalProduct;
  isSail : boolean = false;

  constructor() {}

  ngOnInit() {
    this.product = this.data;
  }

  handleClick(){
   this.isSail = true;
  }
}
