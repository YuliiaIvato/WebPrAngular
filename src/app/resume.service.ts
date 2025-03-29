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


export class ResumeService {
  private getUrl = 'https://jsonplaceholder.typicode.com/posts/3';
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  private localData: any[] = []; // Масив для локального збереження даних

  constructor(private http: HttpClient) { }

  // GET-запит для отримання даних
  getData(): Observable<any> {
    return this.http.get<any>(this.getUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Метод для отримання збережених локально даних
  getLocalData(): any[] {
    return this.localData;
  }

  // для надсилання даних
  postData(data: any): Observable<any> {
    this.localData.push(data); // Зберігаємо введені дані локально
    return this.http.post<any>(this.postUrl, data).pipe(
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
