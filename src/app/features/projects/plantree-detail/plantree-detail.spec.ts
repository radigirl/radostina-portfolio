import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantreeDetail } from './plantree-detail';

describe('PlantreeDetail', () => {
  let component: PlantreeDetail;
  let fixture: ComponentFixture<PlantreeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantreeDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantreeDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
