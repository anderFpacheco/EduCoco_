import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoIngYcnPage } from './uso-ing-ycn.page';

describe('UsoIngYcnPage', () => {
  let component: UsoIngYcnPage;
  let fixture: ComponentFixture<UsoIngYcnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoIngYcnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
