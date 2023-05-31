import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoIngIndustrialPage } from './uso-ing-industrial.page';

describe('UsoIngIndustrialPage', () => {
  let component: UsoIngIndustrialPage;
  let fixture: ComponentFixture<UsoIngIndustrialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoIngIndustrialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
