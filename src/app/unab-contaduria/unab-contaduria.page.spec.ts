import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnabContaduriaPage } from './unab-contaduria.page';

describe('UnabContaduriaPage', () => {
  let component: UnabContaduriaPage;
  let fixture: ComponentFixture<UnabContaduriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnabContaduriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
