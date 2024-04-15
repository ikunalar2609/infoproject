import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirmentListComponent } from './requirment-list.component';

describe('RequirmentListComponent', () => {
  let component: RequirmentListComponent;
  let fixture: ComponentFixture<RequirmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirmentListComponent]
    });
    fixture = TestBed.createComponent(RequirmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
