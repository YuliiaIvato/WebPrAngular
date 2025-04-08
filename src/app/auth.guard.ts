// // export const authGuard: CanActivateFn = (route, state) => {
// //   const router = inject(Router);
// //   const isAuthenticated = !!localStorage.getItem('user'); // Перевіряємо, чи є користувач у LocalStorage
// //
// //   if (!isAuthenticated) {
// //     router.navigate(['/login']); // Якщо не авторизований, перенаправляємо на сторінку логіну
// //     return false;
// //   }
// //   return true;
// // };
//
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class authGuard implements CanActivate {
//   constructor(private router: Router) {}
//
//   canActivate(): boolean {
//     const isAuthenticated = localStorage.getItem('isAuthenticated');
//
//     if (!isAuthenticated) {
//       this.router.navigate(['/login']);
//       return false;
//     }
//     return true;
//   }
// }

//
// import { inject } from '@angular/core';
// // import { Injectable } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from './auth.service'; // Імпортуємо AuthService
//
// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService); // Отримуємо інстанс сервісу автентифікації
//   const router = inject(Router);
//
//   if (!authService.isAuthenticatedStatus()) {
//     router.navigate(['/login']); // Якщо користувач не автентифікований, перенаправляємо на логін
//     return false;
//   }
//   return true;
//
// };
//
//


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Імпортуємо сервіс автентифікації

@Injectable({
  providedIn: 'root', // Тепер AuthGuard доступний у всьому додатку
})
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}
//
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (!this.authService.isAuthenticatedStatus()) {
//       // Якщо користувач не автентифікований, перенаправляємо на сторінку входу
//       this.router.navigate(['/login']);
//       return false;
//     }
//     return true;  // Якщо користувач автентифікований, доступ дозволений
//   }
//
//
//
//
//   //   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Перевірка, чи є користувач автентифікованим
//   //
//   //   if (!isAuthenticated) {
//   //     this.router.navigate(['/login']); // Якщо користувач не автентифікований, перенаправляємо на сторінку логіну
//   //     return false;
//   //   }
//   //
//   //   return true; // Якщо користувач автентифікований, доступ дозволено
//   // }
// }

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}




