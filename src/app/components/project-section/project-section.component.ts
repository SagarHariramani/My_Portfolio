import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectDataService } from '../../../services/project-data/project-data.service';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule,ProjectCardComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css'
})
export class ProjectSectionComponent {
  projectsData:any;

  constructor(private projectDataService:ProjectDataService) { }
  ngOnInit(): void {
    this.projectsData = this.projectDataService.projectsData;
  }
}
