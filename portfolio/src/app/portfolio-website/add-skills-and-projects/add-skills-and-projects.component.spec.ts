import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsAndProjectsComponent } from './add-skills-and-projects.component';

describe('AddSkillsAndProjectsComponent', () => {
  let component: AddSkillsAndProjectsComponent;
  let fixture: ComponentFixture<AddSkillsAndProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSkillsAndProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSkillsAndProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
