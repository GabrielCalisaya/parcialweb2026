import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcialPage } from './parcial-page';

describe('ParcialPage', () => {
  let component: ParcialPage;
  let fixture: ComponentFixture<ParcialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcialPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ParcialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
