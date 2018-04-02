import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'aer-toggle-eavf',
  templateUrl: './toggle-eavf.component.html',
  styleUrls: ['./toggle-eavf.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleEavfComponent),
      multi: true
    }
  ]
})
export class ToggleEavfComponent implements ControlValueAccessor{
  @Input() checkedMsg: string;
  @Input() uncheckedMsg: string;
  @Input('valuetgleavf') _value = false;
  @Input() ngFokel: any;
  public label: string;

  onChange: any = () => { };
  onTouched: any = () => { };

  get valuetgleavf() {
    return this._value;
  }

  set valuetgleavf(val) {
    this.valuetgleavf = val;
    this.onChange(val);
    this.onTouched();
  }

  /*registerOnChange(fn) {
    this.onChange = fn;
    if(this.ngFokel) {
      this.label = this.checkedMsg;
    }
    else {
      this.label = this.uncheckedMsg;
    }
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }
*/
propagateChange = (_: any) => {};

registerOnChange(fn) {
  this.propagateChange = fn;
}

registerOnTouched() {}

  writeValue(value : any) {
    if (value !== undefined) {
      this.valuetgleavf = value;
    }
  }

  prepni() {
    this.valuetgleavf = !this.valuetgleavf;
  }

  //default
  constructor() { }

}
