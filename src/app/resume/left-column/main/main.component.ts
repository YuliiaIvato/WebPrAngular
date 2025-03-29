import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillsComponent} from './skills/skills.component';
import {LanguagesComponent} from './languages/languages.component';
import {HobbiesComponent} from './hobbies/hobbies.component';

import { ResumeService } from '../../../resume.service';
//import { JsonPipe } from '@angular/common'; // Імпорт JsonPipe

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, SkillsComponent, LanguagesComponent, HobbiesComponent], //JsonPipe], //для *ngFor
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit {
  isVisible = true;
  data: any={};
  errorMessage: string = '';

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        this.errorMessage = err.message; // err.message замість err
        console.error('Error fetching data:', err);
      },
      complete: () => console.log('Data fetching completed')
    });
  }
}


// export class ResumeComponent implements OnInit {
//   data: any;  // Це для збереження отриманих даних з GET-запиту
//   postResponse: any;  // Це для збереження відповіді після POST-запиту
//   errorMessage: string = '';  // Це для збереження повідомлення про помилку
//
//   constructor(private resumeService: ResumeService) {}
//
//   ngOnInit(): void {
//     // Це твій GET-запит (якщо треба)
//     this.resumeService.getData().subscribe({
//       next: (response) => {
//         this.data = response;
//       },
//       error: (err) => {
//         console.error('Error fetching data:', err);
//       }
//     });
//   }
//
//   // Метод для надсилання даних через POST-запит
//   submitData(): void {
//     const formData = { name: 'John Doe', position: 'Developer' };
//     console.log('Form data:', formData);  // Додаємо для перевірки
//
//     this.resumeService.postData(formData).subscribe({
//       next: (response) => {
//         this.postResponse = response;
//         console.log('Data successfully posted:', response);  // Додаємо для перевірки
//       },
//       error: (err) => {
//         this.errorMessage = 'Error posting data';
//         console.error('Error posting data:', err);
//       }
//
//
//     });
//
//   }
//
//
// }

