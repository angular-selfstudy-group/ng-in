import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyFormComponent } from './beauty-form.component';

describe('BeautyFormComponent', () => {
  let component: BeautyFormComponent;
  let fixture: ComponentFixture<BeautyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
