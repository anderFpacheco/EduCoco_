import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfParvulaUmaPage } from './prof-parvula-uma.page';

describe('ProfParvulaUmaPage', () => {
  let component: ProfParvulaUmaPage;
  let fixture: ComponentFixture<ProfParvulaUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfParvulaUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
