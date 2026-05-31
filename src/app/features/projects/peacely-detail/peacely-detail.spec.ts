import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeacelyDetail } from './peacely-detail';

describe('PeacelyDetail', () => {
  let component: PeacelyDetail;
  let fixture: ComponentFixture<PeacelyDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeacelyDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PeacelyDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});