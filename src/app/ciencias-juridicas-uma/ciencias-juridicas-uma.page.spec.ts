import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CienciasJuridicasUMAPage } from './ciencias-juridicas-uma.page';

describe('CienciasJuridicasUMAPage', () => {
  let component: CienciasJuridicasUMAPage;
  let fixture: ComponentFixture<CienciasJuridicasUMAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CienciasJuridicasUMAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
