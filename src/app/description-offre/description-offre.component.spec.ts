import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionOffreComponent } from './description-offre.component';

describe('DescriptionOffreComponent', () => {
  let component: DescriptionOffreComponent;
  let fixture: ComponentFixture<DescriptionOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
