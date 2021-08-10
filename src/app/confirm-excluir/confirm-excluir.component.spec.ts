import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmExcluirComponent } from './confirm-excluir.component';

describe('ConfirmExcluirComponent', () => {
  let component: ConfirmExcluirComponent;
  let fixture: ComponentFixture<ConfirmExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
