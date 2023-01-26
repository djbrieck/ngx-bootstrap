import { Component, HostListener, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from '@danielson73s/ngx-bootstrap/datepicker';

@Component({
  selector: 'demo-date-picker-hide-on-scroll',
  templateUrl: './hide-on-scroll.html'
})
export class DemoDatepickerHideOnScrollComponent {
  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }
}
