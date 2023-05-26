import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicJuridiUmaPage } from './lic-juridi-uma.page';

describe('LicJuridiUmaPage', () => {
  let component: LicJuridiUmaPage;
  let fixture: ComponentFixture<LicJuridiUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicJuridiUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
