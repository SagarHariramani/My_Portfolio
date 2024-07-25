import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  projectsData = [
    {
        id: 1,
        name: 'Umeed - A way to save life',
        description: "My team and I built an application to address a problem statement given by the Defence Research and Development Organisation (DRDO), which focused on challenges encountered during the pandemic. Our application helps users find available hospital beds, locate nearby hospitals, private practicing doctors, and blood banks. Additionally, we integrated an emergency button that sends an SMS alert to the user's close contacts. We utilized a robust tech stack to develop this solution, ensuring it effectively addresses the critical needs identified by DRDO during the pandemic.",
        tools: ['Android Studio', 'Java', 'PHP', 'FireBase', 'Google Maps Api', 'Rest Api','DigiLocker Api'],
        role: 'Android Developer',
    },
    {
        id: 2,
        name: 'Nova - A bot',
        description: 'My teammate and I developed a bot designed to automate the process of purchasing products during specific time periods. Users can input all necessary details into the application, which then automatically adds the product to the cart at the designated start time and proceeds to the OTP or CVV page for payment. This ensures that users can take advantage of lower prices typically available in the first 2-5 minutes of a sale. This innovative idea was presented at an inter-college hackathon.',
        tools: ['Python', 'Selenium', "Figma", "Android Studio", "Java", "PHP"],
        role: 'Python Developer'
    },
    {
        id: 3,
        name: 'Employee Directory',
        description: "I created a project for managing employees using advanced technology to streamline various HR processes. The system allows for adding new employees, removing employees, editing employee details, and assigning roles. This comprehensive solution ensures efficient and effective management of employee information and roles within the company.",
        tools: ['Angular', 'C#', 'RestApi', 'SQL-Server', ".Net",'Entity Framework'],
        role: 'Full Stack Developer',
    },
    {
        id: 4,
        name: 'Vitran',
        description: 'My teammate and I developed two interconnected applications to address a problem statement provided by the Ministry of Social Justice and Empowerment. The first application is designed for colleges, enabling them to register once and be automatically listed with every state and the central government. This streamlined process ensures that colleges are recognized for state and central scholarships, making their students eligible. The second application is for students, allowing them to apply for scholarships and receive timely notifications. Our solution significantly reduced processing time by 70%-80%, improving efficiency and accessibility for colleges, students, and government entities.',
        tools: ['ReactJS', 'ReactNative', 'TailwindCSS', 'TypeScript', 'NodeJs', 'MongoDB', 'DigiLocker Api', 'JWT'],
        role: 'Frontend Developer'
    }
];

}
