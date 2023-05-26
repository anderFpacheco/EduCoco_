import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecSoftUmaPage } from './tec-soft-uma.page';

describe('TecSoftUmaPage', () => {
  let component: TecSoftUmaPage;
  let fixture: ComponentFixture<TecSoftUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecSoftUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
