import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabTecComputacionPage } from './unab-tec-computacion.page';

describe('UnabTecComputacionPage', () => {
  let component: UnabTecComputacionPage;
  let fixture: ComponentFixture<UnabTecComputacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabTecComputacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
