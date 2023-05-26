import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabTecTurismoPage } from './unab-tec-turismo.page';

describe('UnabTecTurismoPage', () => {
  let component: UnabTecTurismoPage;
  let fixture: ComponentFixture<UnabTecTurismoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabTecTurismoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
