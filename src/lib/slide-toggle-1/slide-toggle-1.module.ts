import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideToggle1Component } from './slide-toggle-1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [SlideToggle1Component],
  exports: [ SlideToggle1Component ]
})
export class SlideToggle1Module { }