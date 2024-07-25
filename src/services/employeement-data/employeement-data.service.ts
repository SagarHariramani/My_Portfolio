import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeementDataService {
  employeementData=[
    {
      id: 1,
      title: 'Product Engineer Intern',
      company: "Tezo Dgital",
      duration: "(Jan 2024 - Present)"
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "All India Council Of Technical Education (MOE)",
      duration: "(March 2023 - Jan 2024)"
    },
    {
      id: 3,
      title: "Self Employed",
      company: "Code and build something in everyday.",
      duration: "(Jan 2018 - Present)"
    }
  ];

}
