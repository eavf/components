import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleEavfComponent } from './toggle-eavf.component';

describe('VertToglButComponent', () => {
  let component: ToggleEavfComponent;
  let fixture: ComponentFixture<ToggleEavfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleEavfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleEavfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
