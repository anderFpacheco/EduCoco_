import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicMercaUmaPage } from './lic-merca-uma.page';

describe('LicMercaUmaPage', () => {
  let component: LicMercaUmaPage;
  let fixture: ComponentFixture<LicMercaUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicMercaUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
