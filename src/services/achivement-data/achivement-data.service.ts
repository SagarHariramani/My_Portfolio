import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchivementDataService {
  achivements= [
    {
      id:1,
      title:'Smart India Hackathon 2023',
      img:'/assets/image/SIH2023.jpg',
      description:'I was honored to lead my team to the Grand Finale of a national competition featuring around 450 teams from across India. We secured first place and won a cash prize of ₹1 lakh by tackling the problem statement SIH1367 provided by the Ministry of Social Justice and Empowerment (MSJE), Government of India. This achievement underscores our ability to develop innovative solutions for complex challenges, demonstrating both technical expertise and effective problem-solving skills.',
    },
    {
      id:2,
      title:'Smart India Hackathon 2022',
      img:'/assets/image/SIH2022.jpg',
      description:'I was honored to be selected for the Grand Finale of a national competition featuring around 300 teams from across India. We secured first place and won a cash prize of ₹1 lakh. We addressed the problem statement NR1168 provided by the Defence Research and Development Organisation (DRDO), Government of India. This achievement highlights our ability to develop innovative solutions for complex challenges, showcasing both technical expertise and effective problem-solving skills.',
    },
    {
      id:3,
      title:'Ideafiesta 2022',
      img:'/assets/image/Ideafiesta.jpg',
      description:'I was honored to lead my team, Money1st, a team of two, to the Grand Finale of a 36-hour inter-college hackathon organized by our college, where we secured second place and won a cash prize of ₹7,000. Out of approximately 250 participating teams, we excelled in a competition that required us to identify and solve a problem without a pre-defined problem statement. This challenging and dynamic event showcased our ability to innovate and collaborate effectively.',
    }
  ];
}
