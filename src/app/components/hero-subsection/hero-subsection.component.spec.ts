import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSubsectionComponent } from './hero-subsection.component';

describe('HeroSubsectionComponent', () => {
  let component: HeroSubsectionComponent;
  let fixture: ComponentFixture<HeroSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSubsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
