import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillsComponent} from './skills/skills.component';
import {LanguagesComponent} from './languages/languages.component';
import {HobbiesComponent} from './hobbies/hobbies.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, SkillsComponent, LanguagesComponent, HobbiesComponent], //для *ngFor
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
