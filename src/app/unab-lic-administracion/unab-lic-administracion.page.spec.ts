import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabLicAdministracionPage } from './unab-lic-administracion.page';

describe('UnabLicAdministracionPage', () => {
  let component: UnabLicAdministracionPage;
  let fixture: ComponentFixture<UnabLicAdministracionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabLicAdministracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
