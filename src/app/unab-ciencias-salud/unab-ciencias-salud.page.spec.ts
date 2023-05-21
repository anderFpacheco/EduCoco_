import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabCienciasSaludPage } from './unab-ciencias-salud.page';

describe('UnabCienciasSaludPage', () => {
  let component: UnabCienciasSaludPage;
  let fixture: ComponentFixture<UnabCienciasSaludPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabCienciasSaludPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
