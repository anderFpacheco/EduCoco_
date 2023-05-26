import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabTecSaludPage } from './unab-tec-salud.page';

describe('UnabTecSaludPage', () => {
  let component: UnabTecSaludPage;
  let fixture: ComponentFixture<UnabTecSaludPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabTecSaludPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
