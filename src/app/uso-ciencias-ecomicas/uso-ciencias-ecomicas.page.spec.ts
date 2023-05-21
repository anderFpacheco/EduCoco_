import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoCienciasEcomicasPage } from './uso-ciencias-ecomicas.page';

describe('UsoCienciasEcomicasPage', () => {
  let component: UsoCienciasEcomicasPage;
  let fixture: ComponentFixture<UsoCienciasEcomicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoCienciasEcomicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
