import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoLicmatePage } from './uso-licmate.page';

describe('UsoLicmatePage', () => {
  let component: UsoLicmatePage;
  let fixture: ComponentFixture<UsoLicmatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoLicmatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
