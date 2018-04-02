import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleEavfComponent } from './Toggle-Eavf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ToggleEavfComponent],
  exports: [ ToggleEavfComponent ]
})
export class ToggleEavfModule { }