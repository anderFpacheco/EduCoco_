import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoCienJuridicasPage } from './uso-cien-juridicas.page';

describe('UsoCienJuridicasPage', () => {
  let component: UsoCienJuridicasPage;
  let fixture: ComponentFixture<UsoCienJuridicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoCienJuridicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
