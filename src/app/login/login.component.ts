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
  imports: [ReactiveFormsModule, RouterModule, CommonModule], // Імпортуємо необхідний модуль для форм
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]],  // Це або email, або username
      password: ['', [Validators.required, Validators.minLength(6)]],  // Валідація пароля
    });
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const { identifier, password } = this.loginForm.value;
  //
  //     // Отримуємо користувача з localStorage
  //     const storedUser = localStorage.getItem('user');
  //     if (storedUser) {
  //       const user = JSON.parse(storedUser);
  //
  //       // Перевіряємо email або username та пароль
  //       if (
  //         (user.username === identifier || user.email === identifier) &&
  //         user.password === password
  //       ) {
  //         // Якщо дані правильні, зберігаємо в localStorage, що користувач авторизований
  //         localStorage.setItem('isAuthenticated', 'true');
  //         this.router.navigate(['/resume']);  // Перехід на сторінку резюме
  //       } else {
  //         alert('Недійсні облікові дані');
  //       }
  //     } else {
  //       alert('User not found');
  //     }
  //   }
  // }

  onSubmit() {
    if (this.loginForm.valid) {
      const { identifier, password } = this.loginForm.value;
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      // Шукаємо користувача за username або email І паролем
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

      // Якщо знайшли користувача, логін відбувся
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
