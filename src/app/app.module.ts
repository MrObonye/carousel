import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SwiperModule} from 'swiper/angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
