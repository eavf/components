import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertToglButComponent } from './vert-togl-but.component';

describe('VertToglButComponent', () => {
  let component: VertToglButComponent;
  let fixture: ComponentFixture<VertToglButComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertToglButComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertToglButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
