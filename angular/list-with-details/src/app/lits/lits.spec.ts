import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lits } from './lits';

describe('Lits', () => {
  let component: Lits;
  let fixture: ComponentFixture<Lits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lits],
    }).compileComponents();

    fixture = TestBed.createComponent(Lits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
