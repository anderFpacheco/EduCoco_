import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoLicsocialesPage } from './uso-licsociales.page';

describe('UsoLicsocialesPage', () => {
  let component: UsoLicsocialesPage;
  let fixture: ComponentFixture<UsoLicsocialesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoLicsocialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
