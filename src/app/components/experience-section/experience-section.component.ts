import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeementDataService } from '../../../services/employeement-data/employeement-data.service';
import { LottieAnimationComponent } from '../lottie-animation/lottie-animation.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule,LottieAnimationComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
export class ExperienceSectionComponent {
  animationPath:any;
  experiences: any;
  constructor(private employeementServiceData:EmployeementDataService) {
    this.animationPath='/assets/lottie/code.json';
  }
  ngOnInit() {
    this.experiences = this.employeementServiceData.employeementData;
  }

}
