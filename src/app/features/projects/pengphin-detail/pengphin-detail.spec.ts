import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengphinDetail } from './pengphin-detail';

describe('PengphinDetail', () => {
  let component: PengphinDetail;
  let fixture: ComponentFixture<PengphinDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengphinDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PengphinDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
