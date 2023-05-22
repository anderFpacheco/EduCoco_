import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoEcoYCsPage } from './uso-eco-y-cs.page';

describe('UsoEcoYCsPage', () => {
  let component: UsoEcoYCsPage;
  let fixture: ComponentFixture<UsoEcoYCsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoEcoYCsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
