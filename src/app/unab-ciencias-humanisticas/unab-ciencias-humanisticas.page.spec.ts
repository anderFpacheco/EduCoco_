import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabCienciasHumanisticasPage } from './unab-ciencias-humanisticas.page';

describe('UnabCienciasHumanisticasPage', () => {
  let component: UnabCienciasHumanisticasPage;
  let fixture: ComponentFixture<UnabCienciasHumanisticasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabCienciasHumanisticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
