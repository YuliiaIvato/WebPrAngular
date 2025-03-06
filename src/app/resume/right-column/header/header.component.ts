import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //для *ngFor

@Component({
  selector: 'app-header',
  imports: [CommonModule], //для *ngFor
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  contactNumbers: string[] = ['+1-718-310-5588', '+1-313-381-8167'];
}
