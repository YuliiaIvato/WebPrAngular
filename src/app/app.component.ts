import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],  //,ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'WebPrAngular';

  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();  // Викликаємо logout у сервісі
    this.router.navigate(['/login']);  // Перенаправляємо на сторінку логіну
  }

}

