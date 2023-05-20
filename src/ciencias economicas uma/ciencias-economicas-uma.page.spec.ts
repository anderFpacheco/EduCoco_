import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CienciasEconomicasUmaPage } from './ciencias-economicas-uma.page';

describe('CienciasEconomicasUmaPage', () => {
  let component: CienciasEconomicasUmaPage;
  let fixture: ComponentFixture<CienciasEconomicasUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CienciasEconomicasUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
