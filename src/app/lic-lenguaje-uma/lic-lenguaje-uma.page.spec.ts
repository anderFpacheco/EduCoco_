import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicLenguajeUmaPage } from './lic-lenguaje-uma.page';

describe('LicLenguajeUmaPage', () => {
  let component: LicLenguajeUmaPage;
  let fixture: ComponentFixture<LicLenguajeUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicLenguajeUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
