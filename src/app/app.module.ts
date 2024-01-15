import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from '../product/product.component';
import { EventProductComponent } from '../event-product/event-product.component';
import { PhysicalProductComponent } from '../physical-product/physical-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EventProductComponent,
    PhysicalProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
