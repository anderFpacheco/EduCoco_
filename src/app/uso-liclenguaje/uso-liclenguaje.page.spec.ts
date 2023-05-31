import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoLiclenguajePage } from './uso-liclenguaje.page';

describe('UsoLiclenguajePage', () => {
  let component: UsoLiclenguajePage;
  let fixture: ComponentFixture<UsoLiclenguajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoLiclenguajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
