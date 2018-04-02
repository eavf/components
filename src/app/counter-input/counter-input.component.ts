import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

export function createCounterRangeValidator(maxValue, minValue) {
  return function validateCounterRange(c: FormControl) {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue,
        min: minValue
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err: null;
  }
}

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    },
    { 
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})

export class CounterInputComponent implements ControlValueAccessor{

  
  @Input()
  _counterValue = 0; // notice the '_'

  @Input()
  counterRangeMax;

  @Input()
  counterRangeMin;

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  constructor() { }

  validateFn:Function;

  ngOnChanges(changes) {
    if (changes.counterRangeMin || changes.counterRangeMax) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

  ngOnInit() {
    this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

}
