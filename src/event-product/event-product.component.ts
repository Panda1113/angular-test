import { Component, Input, OnInit } from '@angular/core';
import { EventProduct } from '../data/event-product';

@Component({
  selector: 'app-event-product',
  templateUrl: './event-product.component.html',
  styleUrls: ['./event-product.component.css']
})
export class EventProductComponent implements OnInit {
  product?: EventProduct;
  @Input() data:any = []
  constructor() { }

  ngOnInit() {
    this.product = this.data
  }

  handleClick(){
    this.data.title = this.data.title + "Sail";
  }
}