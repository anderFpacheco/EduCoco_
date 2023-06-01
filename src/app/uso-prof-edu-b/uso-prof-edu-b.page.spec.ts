import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoProfEduBPage } from './uso-prof-edu-b.page';

describe('UsoProfEduBPage', () => {
  let component: UsoProfEduBPage;
  let fixture: ComponentFixture<UsoProfEduBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoProfEduBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
