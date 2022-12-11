import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdbRecruteurComponent } from './tdb-recruteur.component';

describe('TdbRecruteurComponent', () => {
  let component: TdbRecruteurComponent;
  let fixture: ComponentFixture<TdbRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdbRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdbRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
