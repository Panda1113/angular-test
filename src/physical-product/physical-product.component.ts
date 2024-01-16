import { Component, Input, OnInit } from '@angular/core';
import { PhysicalProduct } from '../data/physical-product';

@Component({
  selector: 'app-physical-product',
  templateUrl: './physical-product.component.html',
  styleUrls: ['./physical-product.component.css'],
})
export class PhysicalProductComponent implements OnInit {
  @Input() product?: PhysicalProduct;

  constructor() {}

  ngOnInit() {}
}
