import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from '../baitap4/baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4carouselComponent } from './baitap4carousel/baitap4carousel.component';
import { Baitap4ListCardComponent } from './baitap4-list-card/baitap4-list-card.component';
import { Baitap4PromotionComponent } from './baitap4-promotion/baitap4-promotion.component';
import { Baitap4ItemCartSmartphoneComponent } from './baitap4-list-card/baitap4-item-cart-smartphone/baitap4-item-cart-smartphone.component';
import { Baitap4ItemCartLaptopComponent } from './baitap4-list-card/baitap4-item-cart-laptop/baitap4-item-cart-laptop.component';



@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4carouselComponent, Baitap4ListCardComponent, Baitap4PromotionComponent, Baitap4ItemCartSmartphoneComponent, Baitap4ItemCartLaptopComponent],
  exports: [
    Baitap4Component, Baitap4HeaderComponent, Baitap4carouselComponent, Baitap4ListCardComponent, Baitap4PromotionComponent
  ],
  
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
