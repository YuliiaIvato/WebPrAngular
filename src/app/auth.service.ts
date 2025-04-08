import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  logout() {
    localStorage.removeItem('user');  // Видалення користувача
    localStorage.setItem('isAuthenticated', 'false');  // Оновлення статусу автентифікації
  }

}
