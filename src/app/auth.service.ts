import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Перевірка, чи користувач автентифікований
  checkAuthentication() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).isAuthenticated : false;
  }

  // Логін користувача
  login(username: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) => u.username === username && u.password === password
    );

    if (user) {
      user.isAuthenticated = true; // Встановлюємо статус авторизації
      localStorage.setItem('user', JSON.stringify(user)); // Зберігаємо користувача з властивістю isAuthenticated
    }
  }

  // // Логаут користувача (тут тільки скидається статус авторизації)
  // logout() {
  //   const user = JSON.parse(localStorage.getItem('user') || '{}');
  //   if (user) {
  //     user.isAuthenticated = false; // Скидаємо статус авторизації
  //     localStorage.setItem('user', JSON.stringify(user)); // Зберігаємо оновлений користувач
  //   }
  // }

  logout() {
    localStorage.removeItem('user');  // Видалення користувача
    localStorage.setItem('isAuthenticated', 'false');  // Оновлення статусу автентифікації
  }

  // Перевірка автентифікації
  // isAuthenticatedStatus(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user') || '{}');
  //   return user?.isAuthenticated ?? false;
  // }

  isAuthenticatedStatus(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

}
