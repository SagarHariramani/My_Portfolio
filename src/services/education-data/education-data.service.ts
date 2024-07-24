import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationDataService {

  educations = [
    {
      id: 1,
      title: "Bachelor Degree",
      duration: "2020 - 2024",
      institution: "Rungta College of Engineering and Technology",
      grade:'CGPA: 8.00',
    },
    {
      id: 2,
      title: "Higher Secondary Certificate",
      duration: "2018 - 2020",
      institution: "The Aditya Birla Public School",
      grade:'CGPA: 7.89',
    },
    {
      id: 3,
      title: "Secondary School Certificate",
      duration: "2005 - 2018",
      institution: "Carmel Public School",
      grade:'CGPA: 7.68',
    }
  ]
}
