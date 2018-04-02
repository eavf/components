import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'aer-slide-toggle-1',
  templateUrl: './slide-toggle-1.component.html',
  styleUrls: ['./slide-toggle-1.component.scss']
})
export class SlideToggle1Component implements OnInit {

  @Input() checkedMsg: string;
  @Input() uncheckedMsg: string;
  @Input() ngModel1: any;
  @Output() ngModel1Change: EventEmitter<any> = new EventEmitter<any>(true); //attention true môže byť iba ak nemáme dalšie inity

//  public state: boolean;
  public label1: string;
  constructor() { }

  ngOnInit() {
    this.ngModel1 = !this.ngModel1;
    this.onChange();
  }

  public onChange() {
    this.ngModel1 = !this.ngModel1;
    if(this.ngModel1) {
      this.label1 = this.checkedMsg;
    }
    else {
      this.label1 = this.uncheckedMsg;
    }
    this.ngModel1Change.emit(this.ngModel1);
  }
}
