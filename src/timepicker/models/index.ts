import { InjectionToken } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Type } from '@angular/core';

export interface ControlValueAccessorModel {
  provide: InjectionToken<ControlValueAccessor>;
  // tslint:disable-next-line:no-any
  useExisting: Type<any>;
  multi: boolean;
}
