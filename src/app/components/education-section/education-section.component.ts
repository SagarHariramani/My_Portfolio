import { Component } from '@angular/core';
import { LottieAnimationComponent } from "../lottie-animation/lottie-animation.component";
import { CommonModule } from '@angular/common';
import { EducationDataService } from '../../../services/education-data/education-data.service';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule,LottieAnimationComponent],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.css'
})
export class EducationSectionComponent {
  animationPath:any;
  educationData:any;
  constructor(private educationDataService:EducationDataService) {
    this.animationPath = "/assets/lottie/study.json";
  }
  ngOnInit() {
    this.educationData = this.educationDataService.educations;
  }
}
