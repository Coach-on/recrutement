import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerEntretienComponent } from './programmer-entretien.component';

describe('ProgrammerEntretienComponent', () => {
  let component: ProgrammerEntretienComponent;
  let fixture: ComponentFixture<ProgrammerEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammerEntretienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammerEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
