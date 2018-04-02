import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { VertToglButComponent } from './vert-togl-but/vert-togl-but/vert-togl-but.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ AppComponent, CounterInputComponent, VertToglButComponent ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
