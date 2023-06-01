import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoMaestriaNeuroPage } from './uso-maestria-neuro.page';

describe('UsoMaestriaNeuroPage', () => {
  let component: UsoMaestriaNeuroPage;
  let fixture: ComponentFixture<UsoMaestriaNeuroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoMaestriaNeuroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
