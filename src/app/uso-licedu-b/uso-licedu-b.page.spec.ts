import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoLiceduBPage } from './uso-licedu-b.page';

describe('UsoLiceduBPage', () => {
  let component: UsoLiceduBPage;
  let fixture: ComponentFixture<UsoLiceduBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoLiceduBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
