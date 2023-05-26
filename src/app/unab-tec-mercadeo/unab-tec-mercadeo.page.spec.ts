import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabTecMercadeoPage } from './unab-tec-mercadeo.page';

describe('UnabTecMercadeoPage', () => {
  let component: UnabTecMercadeoPage;
  let fixture: ComponentFixture<UnabTecMercadeoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabTecMercadeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
