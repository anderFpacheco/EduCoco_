import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CienciasYHumanidadesUMAPage } from './ciencias-y-humanidades-uma.page';

describe('CienciasYHumanidadesUMAPage', () => {
  let component: CienciasYHumanidadesUMAPage;
  let fixture: ComponentFixture<CienciasYHumanidadesUMAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CienciasYHumanidadesUMAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
