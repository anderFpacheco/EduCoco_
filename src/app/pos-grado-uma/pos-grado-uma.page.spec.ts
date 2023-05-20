import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosGradoUMAPage } from './pos-grado-uma.page';

describe('PosGradoUMAPage', () => {
  let component: PosGradoUMAPage;
  let fixture: ComponentFixture<PosGradoUMAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PosGradoUMAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
