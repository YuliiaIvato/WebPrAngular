import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// export class RegisterComponent {
//   registerForm: FormGroup;
//
//   constructor(private fb: FormBuilder) {
//     this.registerForm = this.fb.group({
//       username: ['', [Validators.required, this.usernameTakenValidator.bind(this)]],
//       email: ['', [Validators.required, Validators.email, this.emailTakenValidator.bind(this)]],
//       password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).+$/)]],
//     });
//   }
//
//   // Перевіряє, чи зайняте ім'я користувача
//   usernameTakenValidator(control: any) {
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     return users.some((user: any) => user.username === control.value) ? { taken: true } : null;
//   }
//
//   // Перевіряє, чи зайнята email-адреса
//   emailTakenValidator(control: any) {
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     return users.some((user: any) => user.email === control.value) ? { taken: true } : null;
//   }
//
//   onSubmit() {
//     if (this.registerForm.valid) {
//       const users = JSON.parse(localStorage.getItem('users') || '[]');
//       users.push(this.registerForm.value);
//       localStorage.setItem('users', JSON.stringify(users));
//       console.log('User registered:', this.registerForm.value);
//     }
//   }
// }
//

// export class RegisterComponent {
//   registerForm: FormGroup;
//
//   constructor(private fb: FormBuilder, private router: Router) {
//     this.registerForm = this.fb.group({
//       username: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [
//         Validators.required,
//         Validators.minLength(8),
//         Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
//       ]]
//     });
//   }
//
//   onSubmit() {
//     if (this.registerForm.valid) {
//       const { username, email, password } = this.registerForm.value;
//
//       const existingUser = localStorage.getItem('user');
//       if (existingUser) {
//         const user = JSON.parse(existingUser);
//         if (user.username === username) {
//           alert('This username is already taken!');
//           return;
//         }
//       }
//
//       const newUser = { username, email, password };
//       localStorage.setItem('user', JSON.stringify(newUser));
//
//       // Перенаправлення на сторінку резюме після успішної реєстрації
//       this.router.navigate(['/resume']);
//     }
//   }
//
//
//
// }

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})

export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
      ]]
    });
  }

  showPassword = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

//   onSubmit() {
//
//
//     if (this.registerForm.valid) {
//       const { username, email, password } = this.registerForm.value;
//       const users = JSON.parse(localStorage.getItem('users') || '[]');
//
// // Перевірка унікальності
//       const isUsernameTaken = users.some((user: any) => user.username === username);
//       const isEmailTaken = users.some((user: any) => user.email === email);
//
//       if (isUsernameTaken || isEmailTaken) {
//         // ... показати помилку
//         return;
//       }
//
//       users.push(newUser);
//
//       localStorage.setItem('users', JSON.stringify(users));  // ✅ масив
//       localStorage.setItem('user', JSON.stringify(newUser)); // ✅ поточний
//
//       //
//       // if (isUsernameTaken) {
//       //   alert('Це імʼя користувача вже зайняте!');
//       //   return;
//       // }
//       //
//       // if (isEmailTaken) {
//       //   alert('Ця електронна пошта вже використовується!');
//       //   return;
//       // }
//       //
//       // const newUser = { username, email, password };
//       // users.push(newUser);
//       //
//       // // localStorage.setItem('users', JSON.stringify(users));
//       // // localStorage.setItem('user', JSON.stringify(newUser)); // одразу логін
//       // //
//       // // this.router.navigate(['/resume']).then(() => {
//       // //   window.location.reload();
//       // // });
//       //
//       // localStorage.setItem('user', JSON.stringify(newUser)); // логін
//       // this.router.navigate(['/resume']).then(() => {
//       //   window.location.reload();
//       // });
//     }
//   }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;

      // Отримуємо масив користувачів з localStorage або порожній масив, якщо даних немає
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      // Перевіряємо, чи вже існує користувач з таким ім'ям або електронною поштою
      const isUsernameTaken = users.some((user: any) => user.username === username);
      const isEmailTaken = users.some((user: any) => user.email === email);

      if (isUsernameTaken) {
        alert('Це імʼя користувача вже зайняте!');
        return;
      }

      if (isEmailTaken) {
        alert('Ця електронна пошта вже використовується!');
        return;
      }

      // Створюємо нового користувача
      const newUser = { username, email, password };

      // Додаємо його до масиву користувачів
      users.push(newUser);

      // Зберігаємо масив користувачів в localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Зберігаємо поточного користувача, щоб одразу залогінити його після реєстрації
      localStorage.setItem('user', JSON.stringify(newUser));

      // Встановлюємо статус авторизації в true, щоб автоматично залогінитись після реєстрації
      localStorage.setItem('isAuthenticated', 'true');

      // Перенаправляємо на сторінку резюме після реєстрації
      this.router.navigate(['/resume']);
    }
  }

  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     const { username, email, password } = this.registerForm.value;
  //     const users = JSON.parse(localStorage.getItem('users') || '[]');
  //     // Перевіряємо, чи вже існує користувач з таким іменем або електронною поштою
  //     const isUsernameTaken = users.some((user: any) => user.username === username);
  //     const isEmailTaken = users.some((user: any) => user.email === email);
  //
  //     if (isUsernameTaken) {
  //       alert('Це імʼя користувача вже зайняте!');
  //       return;
  //     }
  //     if (isEmailTaken) {
  //       alert('Ця електронна пошта вже використовується!');
  //       return;
  //     }
  //     // Створюємо нового користувача
  //     const newUser = { username, email, password };
  //
  //     // Додаємо його до масиву користувачів
  //     users.push(newUser);
  //
  //     // Зберігаємо масив користувачів в localStorage
  //     localStorage.setItem('users', JSON.stringify(users));
  //     localStorage.setItem('user', JSON.stringify(newUser)); // зберігаємо поточного користувача
  //
  //     // Перенаправляємо на сторінку резюме після реєстрації
  //     this.router.navigate(['/resume']);
  //   }
  // }

}
