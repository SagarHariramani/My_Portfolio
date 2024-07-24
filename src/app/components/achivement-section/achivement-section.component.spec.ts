import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivementSectionComponent } from './achivement-section.component';

describe('AchivementSectionComponent', () => {
  let component: AchivementSectionComponent;
  let fixture: ComponentFixture<AchivementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivementSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
