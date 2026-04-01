import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarminDetail } from './garmin-detail';

describe('GarminDetail', () => {
  let component: GarminDetail;
  let fixture: ComponentFixture<GarminDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarminDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(GarminDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
