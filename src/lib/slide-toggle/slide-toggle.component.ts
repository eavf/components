import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'aer-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  @Input() checkedMsg: string;
  @Input() uncheckedMsg: string;
  @Input() ngModel: any;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter<any>();

//  public state: boolean;
  public label: string;
  constructor() { }

  ngOnInit() {
    this.ngModel = !this.ngModel;
    this.onChange();
  }

  public onChange() {
    this.ngModel = !this.ngModel;
    if(this.ngModel) {
      this.label = this.checkedMsg;
    }
    else {
      this.label = this.uncheckedMsg;
    }
    this.ngModelChange.emit(this.ngModel);
  }
}
