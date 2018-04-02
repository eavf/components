import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createCounterRangeValidator  } from '../app/counter-input/counter-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  form: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.form = this.fb.group({
      counter: [8, createCounterRangeValidator(10, 0)]
    });
  }

}
