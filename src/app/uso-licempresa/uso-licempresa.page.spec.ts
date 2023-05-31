import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoLicempresaPage } from './uso-licempresa.page';

describe('UsoLicempresaPage', () => {
  let component: UsoLicempresaPage;
  let fixture: ComponentFixture<UsoLicempresaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoLicempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
