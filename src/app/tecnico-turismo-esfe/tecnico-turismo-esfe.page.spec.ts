import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnicoTurismoESFEPage } from './tecnico-turismo-esfe.page';

describe('TecnicoTurismoESFEPage', () => {
  let component: TecnicoTurismoESFEPage;
  let fixture: ComponentFixture<TecnicoTurismoESFEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnicoTurismoESFEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
