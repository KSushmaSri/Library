import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonfictionalComponent } from './nonfictional.component';

describe('NonfictionalComponent', () => {
  let component: NonfictionalComponent;
  let fixture: ComponentFixture<NonfictionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonfictionalComponent]
    });
    fixture = TestBed.createComponent(NonfictionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
