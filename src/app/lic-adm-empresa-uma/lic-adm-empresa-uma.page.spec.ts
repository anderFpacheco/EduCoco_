import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicAdmEmpresaUmaPage } from './lic-adm-empresa-uma.page';

describe('LicAdmEmpresaUmaPage', () => {
  let component: LicAdmEmpresaUmaPage;
  let fixture: ComponentFixture<LicAdmEmpresaUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicAdmEmpresaUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
