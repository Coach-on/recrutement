import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeChoixIComponent } from './page-de-choix-i.component';

describe('PageDeChoixIComponent', () => {
  let component: PageDeChoixIComponent;
  let fixture: ComponentFixture<PageDeChoixIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeChoixIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeChoixIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
