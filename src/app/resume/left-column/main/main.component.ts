import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule], //для *ngFor
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  languages: string[] = ['English', 'Spanish', 'French'];
}
