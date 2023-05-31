import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoLiccontaPage } from './uso-licconta.page';

describe('UsoLiccontaPage', () => {
  let component: UsoLiccontaPage;
  let fixture: ComponentFixture<UsoLiccontaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoLiccontaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
