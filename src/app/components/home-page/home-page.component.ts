import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeAboutMeComponent } from '../home-about-me/home-about-me.component';
import { AboutMeSectionComponent } from '../about-me-section/about-me-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { SkillSectionComponent } from '../skill-section/skill-section.component';
import { ProjectSectionComponent } from '../project-section/project-section.component';
import { EducationSectionComponent } from '../education-section/education-section.component';
import { AchivementSectionComponent } from '../achivement-section/achivement-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent,HomeAboutMeComponent,AboutMeSectionComponent,ExperienceSectionComponent,SkillSectionComponent,ProjectSectionComponent,EducationSectionComponent,AchivementSectionComponent,ContactSectionComponent,FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
 
}
