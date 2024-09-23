import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubjectsComponent } from './card-subjects.component';

describe('CardSubjectsComponent', () => {
  let component: CardSubjectsComponent;
  let fixture: ComponentFixture<CardSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
