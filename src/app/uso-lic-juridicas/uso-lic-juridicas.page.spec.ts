import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoLicJuridicasPage } from './uso-lic-juridicas.page';

describe('UsoLicJuridicasPage', () => {
  let component: UsoLicJuridicasPage;
  let fixture: ComponentFixture<UsoLicJuridicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoLicJuridicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
