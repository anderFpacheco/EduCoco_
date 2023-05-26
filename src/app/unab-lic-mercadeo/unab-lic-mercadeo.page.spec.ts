import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabLicMercadeoPage } from './unab-lic-mercadeo.page';

describe('UnabLicMercadeoPage', () => {
  let component: UnabLicMercadeoPage;
  let fixture: ComponentFixture<UnabLicMercadeoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabLicMercadeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
