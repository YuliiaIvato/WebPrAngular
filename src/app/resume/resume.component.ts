import { Component, OnInit } from '@angular/core';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { ResumeService } from '../resume.service';
import { JsonPipe } from '@angular/common'; // Імпорт JsonPipe

@Component({
  selector: 'app-resume',
  imports: [LeftColumnComponent, RightColumnComponent, JsonPipe], // Додаємо JsonPipe
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  data: any;  // Це для збереження отриманих даних з GET-запиту
  postResponse: any;  // Це для збереження відповіді після POST-запиту
  errorMessage: string = '';  // Це для збереження повідомлення про помилку

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    // Це твій GET-запит (якщо треба)
    this.resumeService.getData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  // Метод для надсилання даних через POST-запит
  submitData(): void {
    const formData = { name: 'John Doe', position: 'Developer' };
    console.log('Form data:', formData);  // Додаємо для перевірки

    this.resumeService.postData(formData).subscribe({
      next: (response) => {
        this.postResponse = response;
        console.log('Data successfully posted:', response);  // Додаємо для перевірки
      },
      error: (err) => {
        this.errorMessage = 'Error posting data';
        console.error('Error posting data:', err);
      }


    });

  }


}
