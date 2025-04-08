import { Component } from '@angular/core';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { CommonModule } from '@angular/common';
;
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Імпортуємо AuthService


@Component({
  selector: 'app-resume',
  imports: [LeftColumnComponent, RightColumnComponent, CommonModule],
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout(); // Скидаємо статус автентифікації
    this.router.navigate(['/login']); // Перенаправляємо на сторінку логіну
  }
}
