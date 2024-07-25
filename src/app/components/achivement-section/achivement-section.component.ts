import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AchivementDataService } from '../../../services/achivement-data/achivement-data.service';

@Component({
  selector: 'app-achivement-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achivement-section.component.html',
  styleUrl: './achivement-section.component.css'
})
export class AchivementSectionComponent {
  achivements:any ;
  constructor(private achivementData:AchivementDataService){}
  ngOnInit(){
    this.achivements = this.achivementData.achivements;
  }
}
