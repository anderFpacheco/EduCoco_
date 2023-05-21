import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnicoElectricoESFEPage } from './tecnico-electrico-esfe.page';

describe('TecnicoElectricoESFEPage', () => {
  let component: TecnicoElectricoESFEPage;
  let fixture: ComponentFixture<TecnicoElectricoESFEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnicoElectricoESFEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
