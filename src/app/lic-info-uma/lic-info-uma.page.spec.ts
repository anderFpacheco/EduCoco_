import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicInfoUmaPage } from './lic-info-uma.page';

describe('LicInfoUmaPage', () => {
  let component: LicInfoUmaPage;
  let fixture: ComponentFixture<LicInfoUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicInfoUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
