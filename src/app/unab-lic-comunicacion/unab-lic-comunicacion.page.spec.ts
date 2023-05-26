import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabLicComunicacionPage } from './unab-lic-comunicacion.page';

describe('UnabLicComunicacionPage', () => {
  let component: UnabLicComunicacionPage;
  let fixture: ComponentFixture<UnabLicComunicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabLicComunicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
