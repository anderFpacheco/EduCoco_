import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoIngElectricaPage } from './uso-ing-electrica.page';

describe('UsoIngElectricaPage', () => {
  let component: UsoIngElectricaPage;
  let fixture: ComponentFixture<UsoIngElectricaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoIngElectricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
