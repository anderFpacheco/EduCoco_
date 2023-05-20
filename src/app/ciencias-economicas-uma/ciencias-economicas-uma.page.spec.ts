import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CienciasEconomicasUMAPage } from './ciencias-economicas-uma.page';

describe('CienciasEconomicasUMAPage', () => {
  let component: CienciasEconomicasUMAPage;
  let fixture: ComponentFixture<CienciasEconomicasUMAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CienciasEconomicasUMAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
