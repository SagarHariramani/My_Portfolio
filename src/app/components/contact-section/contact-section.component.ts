import { Component } from '@angular/core';
import { PersonalDataService } from '../../../services/personal-data/personal-data.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

  personalData: any;
  constructor(private personalDataservice:PersonalDataService) {}
  ngOnInit() {
    this.personalData = this.personalDataservice.personalData;
  }

}
