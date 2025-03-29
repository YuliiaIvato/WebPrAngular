// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


// export class ResumeService {
//   private getUrl = 'https://jsonplaceholder.typicode.com/posts/3';
//   private postUrl = 'https://jsonplaceholder.typicode.com/posts';
//   private localData: any[] = []; // Масив для локального збереження даних
//
//   constructor(private http: HttpClient) { }
//
//   // GET-запит для отримання даних
//   getData(): Observable<any> {
//     return this.http.get<any>(this.getUrl).pipe(
//       catchError(this.handleError)
//     );
//   }
//
//   // Метод для отримання збережених локально даних
//   getLocalData(): any[] {
//     return this.localData;
//   }
//
//   // для надсилання даних
//   postData(data: any): Observable<any> {
//     this.localData.push(data); // Зберігаємо введені дані локально
//     return this.http.post<any>(this.postUrl, data).pipe(
//       catchError(this.handleError)
//     );
//   }
//
//
//   // Обробка помилок
//   private handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Неочікувана помилка';
//     if (error.error instanceof ErrorEvent) {
//       errorMessage = `Помилка: ${error.error.message}`;
//     } else {
//       errorMessage = `Код помилки: ${error.status}, повідомлення: ${error.message}`;
//     }
//     return throwError(() => new Error(errorMessage));
//   }
//
//
// }

export class ResumeService {
  private getUrl = 'https://jsonplaceholder.typicode.com/posts/3';
  getData(): Observable<any> {
    return this.http.get<any>(this.getUrl).pipe(
      catchError(this.handleError)
    );
  }

  private localData: any[] = []; // Масив для локального збереження

  constructor(private http: HttpClient) {
    this.loadFromStorage();
  }

  // Метод отримання локальних даних
  getLocalData(): any[] {
    return this.localData;
  }

  clearLocalStorage() {
    localStorage.removeItem('references'); // Видаляємо дані з localStorage
    this.localData = []; // Очищаємо масив у сервісі
  }

  // Метод для збереження у localStorage
  private saveToStorage() {
    localStorage.setItem('references', JSON.stringify(this.localData));
  }


  // Метод для завантаження з localStorage при запуску
  private loadFromStorage() {
    const savedData = localStorage.getItem('references');
    if (savedData) {
      this.localData = JSON.parse(savedData);
    }
  }

  // Додаємо дані і зберігаємо у localStorage
  postData(data: any): Observable<any> {
    this.localData.push(data);
    this.saveToStorage(); // Збереження у localStorage
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', data).pipe(
      catchError(this.handleError)
    );
  }

  // Обробка помилок
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Неочікувана помилка';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Помилка: ${error.error.message}`;
    } else {
      errorMessage = `Код помилки: ${error.status}, повідомлення: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
