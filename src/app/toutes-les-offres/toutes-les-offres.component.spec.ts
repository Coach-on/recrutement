import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutesLesOffresComponent } from './toutes-les-offres.component';

describe('ToutesLesOffresComponent', () => {
  let component: ToutesLesOffresComponent;
  let fixture: ComponentFixture<ToutesLesOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutesLesOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToutesLesOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
