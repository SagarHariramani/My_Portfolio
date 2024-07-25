import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {

  skillsData = [
    {
      name: 'Python',
      img:'/assets/svg/skills/python.svg'
    },
    {
      name: 'HTML',
      img:'/assets/svg/skills/html.svg'
    },
    {
      name: 'CSS',
      img:'/assets/svg/skills/css.svg'
    },
    {
      name: 'Javascript',
      img:'/assets/svg/skills/javascript.svg'
    },
    {
      name: 'Typescript',
      img:'/assets/svg/skills/typescript.svg'
    },
    {
      name: 'Angular',
      img:'/assets/svg/skills/angular.svg'
    },
    {
      name: 'C#',
      img:'/assets/svg/skills/csharp.svg'
    },
    {
      name: '.NET',
      img:'/assets/svg/skills/microsoft_.net.svg'
    },
    {
      name: 'PHP',
      img:'/assets/svg/skills/php.svg'
    },
    {
      name: 'MySQL',
      img:'/assets/svg/skills/mysql.svg'
    },
    {
      name: 'PowerBI',
      img:'/assets/svg/skills/power-bi.svg'
    },
    {
      name: 'Bootstrap',
      img:'/assets/svg/skills/bootstrap.svg'
    },
    {
      name: 'Figma',
      img:'/assets/svg/skills/figma.svg'
    },
    {
      name: 'Shopify',
      img:'/assets/svg/skills/shopify.svg'
    }
  ]
}
