import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-languages',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  languages: string[] = ['English', 'Spanish', 'French'];
}
