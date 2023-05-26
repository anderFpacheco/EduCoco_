import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicInglesUmaPage } from './lic-ingles-uma.page';

describe('LicInglesUmaPage', () => {
  let component: LicInglesUmaPage;
  let fixture: ComponentFixture<LicInglesUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicInglesUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
