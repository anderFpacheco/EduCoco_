import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoIngAgroPage } from './uso-ing-agro.page';

describe('UsoIngAgroPage', () => {
  let component: UsoIngAgroPage;
  let fixture: ComponentFixture<UsoIngAgroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoIngAgroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
