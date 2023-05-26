import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabLicTurismoPage } from './unab-lic-turismo.page';

describe('UnabLicTurismoPage', () => {
  let component: UnabLicTurismoPage;
  let fixture: ComponentFixture<UnabLicTurismoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabLicTurismoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
