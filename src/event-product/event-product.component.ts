import { Component, Input, OnInit } from '@angular/core';
import { EventProduct } from '../data/event-product';

@Component({
  selector: 'app-event-product',
  templateUrl: './event-product.component.html',
  styleUrls: ['./event-product.component.css']
})
export class EventProductComponent implements OnInit {
  @Input() product?: EventProduct;

  constructor() { }

  ngOnInit() {
    console.log("event product", this.product)
  }

}