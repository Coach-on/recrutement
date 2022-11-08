import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationMdpComponent } from './creation-mdp.component';

describe('CreationMdpComponent', () => {
  let component: CreationMdpComponent;
  let fixture: ComponentFixture<CreationMdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationMdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
