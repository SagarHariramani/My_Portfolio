import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeementDataService {
  employeementData=[
    {
      id: 1,
      title: "Startup-Fellow (Software Developer)",
      company: "Ministry of Education's Innovation Cell",
      duration: "(Nov 2024 - Present)"
    },
    {
      id: 2,
      title: 'Product Engineer Intern',
      company: "Tezo Dgital",
      duration: "(Jan 2024 - July 2024)"
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "Ministry of Education's Innovation Cell",
      duration: "(March 2023 - Jan 2024)"
    }
  ];

}
