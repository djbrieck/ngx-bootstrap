import { Component } from '@angular/core';
import { CarouselConfig } from '@danielson73s/ngx-bootstrap/carousel';

@Component({
  selector: 'demo-carousel-config',
  templateUrl: './config.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class DemoCarouselConfigComponent {}
