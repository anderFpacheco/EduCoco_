import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsfePage } from './esfe.page';

describe('EsfePage', () => {
  let component: EsfePage;
  let fixture: ComponentFixture<EsfePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
