import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Імпортуємо RouterModule

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { identifier, password } = this.loginForm.value;
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      const matchedUser = users.find((user: any) => {
        return (
          (user.username === identifier || user.email === identifier) &&
          user.password === password
        );
      });

      if (!matchedUser) {
        alert('User not found or password is incorrect');
        return;
      }

      localStorage.setItem('user', JSON.stringify(matchedUser));
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/resume']);
    }
  }

  showPassword = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
