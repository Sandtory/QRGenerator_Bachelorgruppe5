import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtstyrInfoComponent } from './utstyr-info.component';

describe('UtstyrInfoComponent', () => {
  let component: UtstyrInfoComponent;
  let fixture: ComponentFixture<UtstyrInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtstyrInfoComponent]
    });
    fixture = TestBed.createComponent(UtstyrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
