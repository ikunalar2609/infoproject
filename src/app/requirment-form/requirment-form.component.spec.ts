import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirmentFormComponent } from './requirment-form.component';

describe('RequirmentFormComponent', () => {
  let component: RequirmentFormComponent;
  let fixture: ComponentFixture<RequirmentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirmentFormComponent]
    });
    fixture = TestBed.createComponent(RequirmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
