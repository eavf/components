import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-vert-togl-but',
  templateUrl: './vert-togl-but.component.html',
  styleUrls: ['./vert-togl-but.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VertToglButComponent),
      multi: true
    }
  ]
})
export class VertToglButComponent implements ControlValueAccessor{

  @Input() label = 'prepinac';
  @Input('value') _value = false;
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(val : any) {
    if (val !== undefined) {
      this.value = val;
    }
  }

  prepni() {
    this.value = !this.value;
  }

  //default
  constructor() { }

}
