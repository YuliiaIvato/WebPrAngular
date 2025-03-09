import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-hobbies',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  hobbies = [
    { name: 'Book Reading', progress: 70 },
    { name: 'Traveling', progress: 70 },
    { name: 'Playing Chess', progress: 70 }
  ];
}
