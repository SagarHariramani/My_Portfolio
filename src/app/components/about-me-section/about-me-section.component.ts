import { Component } from '@angular/core';
import { PersonalDataService } from '../../../services/personal-data/personal-data.service';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.css'
})
export class AboutMeSectionComponent {
  personalData: any;
  constructor(private personalDataservice:PersonalDataService) {}
  ngOnInit() {
    this.personalData = this.personalDataservice.personalData;
  }
}
