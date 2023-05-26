import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabLicComputacionPage } from './unab-lic-computacion.page';

describe('UnabLicComputacionPage', () => {
  let component: UnabLicComputacionPage;
  let fixture: ComponentFixture<UnabLicComputacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabLicComputacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
