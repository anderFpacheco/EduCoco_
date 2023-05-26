import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicContaUmaPage } from './lic-conta-uma.page';

describe('LicContaUmaPage', () => {
  let component: LicContaUmaPage;
  let fixture: ComponentFixture<LicContaUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicContaUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
