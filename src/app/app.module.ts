import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent, CounterInputComponent ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
