import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionalComponent } from './fictional.component';

describe('FictionalComponent', () => {
  let component: FictionalComponent;
  let fixture: ComponentFixture<FictionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FictionalComponent]
    });
    fixture = TestBed.createComponent(FictionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
