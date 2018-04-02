import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createCounterRangeValidator  } from '../app/counter-input/counter-input.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  form: FormGroup 
  value=false;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.form = this.fb.group({
      counter: [8, createCounterRangeValidator(10, 0)],
      mySwitch: [true]

    });
  }

  submit() {
    alert(`Value: ${this.form.controls.mySwitch.value}`);
    console.log(`Value: ${this.form.controls.mySwitch.value}`);
  }

}
