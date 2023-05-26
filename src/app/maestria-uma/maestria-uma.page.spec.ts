import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaestriaUmaPage } from './maestria-uma.page';

describe('MaestriaUmaPage', () => {
  let component: MaestriaUmaPage;
  let fixture: ComponentFixture<MaestriaUmaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaestriaUmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
