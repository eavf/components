import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideToggleComponent } from './slide-toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [SlideToggleComponent],
  exports: [ SlideToggleComponent ]
})
export class SlideToggleModule { }