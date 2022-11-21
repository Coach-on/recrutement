import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionRecruteurE1Component } from './inscription-recruteur-e1.component';

describe('InscriptionRecruteurE1Component', () => {
  let component: InscriptionRecruteurE1Component;
  let fixture: ComponentFixture<InscriptionRecruteurE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionRecruteurE1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionRecruteurE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
