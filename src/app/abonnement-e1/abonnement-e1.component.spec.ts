import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementE1Component } from './abonnement-e1.component';

describe('AbonnementE1Component', () => {
  let component: AbonnementE1Component;
  let fixture: ComponentFixture<AbonnementE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementE1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnementE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
