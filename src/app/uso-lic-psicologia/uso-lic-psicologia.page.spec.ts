import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoLicPsicologiaPage } from './uso-lic-psicologia.page';

describe('UsoLicPsicologiaPage', () => {
  let component: UsoLicPsicologiaPage;
  let fixture: ComponentFixture<UsoLicPsicologiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoLicPsicologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
