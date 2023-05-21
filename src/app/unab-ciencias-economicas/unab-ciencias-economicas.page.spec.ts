import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabCienciasEconomicasPage } from './unab-ciencias-economicas.page';

describe('UnabCienciasEconomicasPage', () => {
  let component: UnabCienciasEconomicasPage;
  let fixture: ComponentFixture<UnabCienciasEconomicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabCienciasEconomicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
