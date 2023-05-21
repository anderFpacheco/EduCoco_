import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnicoSoftwareESFEPage } from './tecnico-software-esfe.page';

describe('TecnicoSoftwareESFEPage', () => {
  let component: TecnicoSoftwareESFEPage;
  let fixture: ComponentFixture<TecnicoSoftwareESFEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnicoSoftwareESFEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
