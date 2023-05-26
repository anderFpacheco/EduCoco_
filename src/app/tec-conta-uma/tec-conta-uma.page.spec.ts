import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecContaUmaPage } from './tec-conta-uma.page';

describe('TecContaUmaPage', () => {
  let component: TecContaUmaPage;
  let fixture: ComponentFixture<TecContaUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecContaUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
