import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfSocialesUmaPage } from './prof-sociales-uma.page';

describe('ProfSocialesUmaPage', () => {
  let component: ProfSocialesUmaPage;
  let fixture: ComponentFixture<ProfSocialesUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfSocialesUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
