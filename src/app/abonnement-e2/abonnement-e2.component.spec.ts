import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementE2Component } from './abonnement-e2.component';

describe('AbonnementE2Component', () => {
  let component: AbonnementE2Component;
  let fixture: ComponentFixture<AbonnementE2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementE2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnementE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
