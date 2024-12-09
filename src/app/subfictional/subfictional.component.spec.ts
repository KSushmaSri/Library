import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfictionalComponent } from './subfictional.component';

describe('SubfictionalComponent', () => {
  let component: SubfictionalComponent;
  let fixture: ComponentFixture<SubfictionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubfictionalComponent]
    });
    fixture = TestBed.createComponent(SubfictionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
