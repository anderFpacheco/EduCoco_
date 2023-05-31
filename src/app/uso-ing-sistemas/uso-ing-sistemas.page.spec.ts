import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoIngSistemasPage } from './uso-ing-sistemas.page';

describe('UsoIngSistemasPage', () => {
  let component: UsoIngSistemasPage;
  let fixture: ComponentFixture<UsoIngSistemasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoIngSistemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
