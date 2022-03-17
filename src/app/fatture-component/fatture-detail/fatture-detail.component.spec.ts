import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureDetailComponent } from './fatture-detail.component';

describe('FattureDetailComponent', () => {
  let component: FattureDetailComponent;
  let fixture: ComponentFixture<FattureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattureDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
