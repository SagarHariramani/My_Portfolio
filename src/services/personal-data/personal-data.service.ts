import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  personalData = {
    name: 'Sagar Hariramani',
    phone: '+91 6262833113',
    email:  'sagarhariramani113@gmail.com',
    address: 'Tilda, Chhattisgarh, India',
    profile:'assets/profile.jpg',
    designation: 'Software Developer',
    description: "My name is Sagar Hariramani, a highly motivated and results-driven programmer with a passion for problem-solving and continuous learning. I excel at quickly adapting to new technologies and enjoy working across various web development stacks to create accessible and efficient solutions. I have twice won the prestigious Smart India Hackathon, demonstrating my ability to lead and succeed in competitive environments. I am actively seeking job opportunities that align with my skills and expertise.",
    github: 'https://github.com/sagarhariramani',
    linkedIn: 'https://linkedin.com/in/sagarhariramani',
    facebook: 'https://facebook.com/sagar.hariramani.3',
    leetcode: 'https://leetcode.com/u/sagarhariramani',
    twitter: 'https://x.com/SagarHariramani',
    resume: 'assets/pdf/SagarHariramani.pdf',
  };


}
