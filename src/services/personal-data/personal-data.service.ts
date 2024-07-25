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
    description: "My name is Sagar Hariramani. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
    github: 'https://github.com/sagarhariramani',
    linkedIn: 'https://linkedin.com/in/sagarhariramani',
    facebook: 'https://facebook.com/sagar.hariramani.3',
    leetcode: 'https://leetcode.com/u/sagarhariramani',
    twitter: 'https://x.com/SagarHariramani',
    resume: '/assets/pdf/SagarHariramani.pdf',
  };


}
