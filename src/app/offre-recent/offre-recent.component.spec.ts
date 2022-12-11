import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreRecentComponent } from './offre-recent.component';

describe('OffreRecentComponent', () => {
  let component: OffreRecentComponent;
  let fixture: ComponentFixture<OffreRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
