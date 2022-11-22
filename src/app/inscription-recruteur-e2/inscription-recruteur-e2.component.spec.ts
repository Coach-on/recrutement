import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionRecruteurE2Component } from './inscription-recruteur-e2.component';

describe('InscriptionRecruteurE2Component', () => {
  let component: InscriptionRecruteurE2Component;
  let fixture: ComponentFixture<InscriptionRecruteurE2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionRecruteurE2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionRecruteurE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
