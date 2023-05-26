import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabLicSaludPage } from './unab-lic-salud.page';

describe('UnabLicSaludPage', () => {
  let component: UnabLicSaludPage;
  let fixture: ComponentFixture<UnabLicSaludPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabLicSaludPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
