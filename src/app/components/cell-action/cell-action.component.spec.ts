import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellActionComponent } from './cell-action.component';

describe('CellActionComponent', () => {
  let component: CellActionComponent;
  let fixture: ComponentFixture<CellActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CellActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
