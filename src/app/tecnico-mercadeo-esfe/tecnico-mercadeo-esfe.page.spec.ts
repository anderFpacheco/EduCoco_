import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnicoMercadeoESFEPage } from './tecnico-mercadeo-esfe.page';

describe('TecnicoMercadeoESFEPage', () => {
  let component: TecnicoMercadeoESFEPage;
  let fixture: ComponentFixture<TecnicoMercadeoESFEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnicoMercadeoESFEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
