import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsDataService } from '../../../services/skills-data/skills-data.service';


@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.css'
})
export class SkillSectionComponent implements OnInit {
  skillsData: any;

  constructor(private skillDataService:SkillsDataService) { }

  ngOnInit(): void {
    this.skillsData = this.skillDataService.skillsData;
  }

  
}