import { Component } from '@angular/core';
import { PersonalDataService } from '../../../services/personal-data/personal-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  personalData:any;
  constructor(private personalDataService:PersonalDataService) {}
  ngOnInit() {
    this.personalData = this.personalDataService.personalData;
  }

}
