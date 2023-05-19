import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UNABPage } from './unab.page';

describe('UNABPage', () => {
  let component: UNABPage;
  let fixture: ComponentFixture<UNABPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UNABPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
