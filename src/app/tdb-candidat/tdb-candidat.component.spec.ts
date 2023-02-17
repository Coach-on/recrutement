import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdbCandidatComponent } from './tdb-candidat.component';

describe('TdbCandidatComponent', () => {
  let component: TdbCandidatComponent;
  let fixture: ComponentFixture<TdbCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdbCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdbCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
