import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsFavorisRComponent } from './candidats-favoris-r.component';

describe('CandidatsFavorisRComponent', () => {
  let component: CandidatsFavorisRComponent;
  let fixture: ComponentFixture<CandidatsFavorisRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatsFavorisRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatsFavorisRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
