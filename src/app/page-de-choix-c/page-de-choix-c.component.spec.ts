import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeChoixCComponent } from './page-de-choix-c.component';

describe('PageDeChoixCComponent', () => {
  let component: PageDeChoixCComponent;
  let fixture: ComponentFixture<PageDeChoixCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeChoixCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeChoixCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
