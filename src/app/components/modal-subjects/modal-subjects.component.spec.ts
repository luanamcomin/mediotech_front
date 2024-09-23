import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubjectsComponent } from './modal-subjects.component';

describe('ModalSubjectsComponent', () => {
  let component: ModalSubjectsComponent;
  let fixture: ComponentFixture<ModalSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSubjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
