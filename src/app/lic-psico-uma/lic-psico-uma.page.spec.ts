import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicPsicoUmaPage } from './lic-psico-uma.page';

describe('LicPsicoUmaPage', () => {
  let component: LicPsicoUmaPage;
  let fixture: ComponentFixture<LicPsicoUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicPsicoUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
