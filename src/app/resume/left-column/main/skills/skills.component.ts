import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    NgForOf
  ],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Adobe Photoshop', progress: 70 },
    { name: 'Adobe Illustrator', progress: 70 },
    { name: 'Microsoft PowerPoint', progress: 70 },
    { name: 'Microsoft Word', progress: 70 },
    { name: 'HTML-S/CSS-3', progress: 70 }
  ];
}
