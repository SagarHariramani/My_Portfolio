import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { PersonalDataService } from '../../../services/personal-data/personal-data.service';

@Component({
  selector: 'app-home-about-me',
  standalone: true,
  imports: [CodeSnippetComponent],
  templateUrl: './home-about-me.component.html',
  styleUrl: './home-about-me.component.css'
})
export class HomeAboutMeComponent {
  personalData: any;
  constructor(private personalDataservice:PersonalDataService) {}
  ngOnInit() {
    this.personalData = this.personalDataservice.personalData;
  }

}
