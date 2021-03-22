import { Component, OnInit } from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  slides = [
    { id: 1, title: 'Mobile internet', action: 'Start here', link: '#' },
    { id: 2, title: 'Home internet', action: 'Start here', link: '#' },
    { id: 3, title: 'Get a device', action: 'Start here', link: '#' },
    { id: 4, title: 'Add a phone-line', action: 'Start here', link: '#' },
    { id: 5, title: 'Upgrade', action: 'Start here', link: '#' }
  ];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    pagination: false,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      1080: {
        slidesPerView: 5,
        spaceBetween: 16,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 34,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 34,
        centeredSlides: true,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  gotoLink(link: string) {
    console.log('goto link', link);
  }

}
