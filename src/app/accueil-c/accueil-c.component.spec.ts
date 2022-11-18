import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCComponent } from './accueil-c.component';

describe('AccueilCComponent', () => {
  let component: AccueilCComponent;
  let fixture: ComponentFixture<AccueilCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
