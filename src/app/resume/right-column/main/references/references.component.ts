import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ResumeService } from '../../../../resume.service';
import {CommonModule} from '@angular/common';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneFormatPipe } from '../../../../phone-format.pipe';

@Component({
  selector: 'app-references',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, PhoneFormatPipe],
  standalone: true,
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {
  referenceForm: FormGroup;
  localReferences: any[] = []; // Масив для локального відображення

  constructor(private fb: FormBuilder, private resumeService: ResumeService) {
    this.referenceForm = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      phone: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(19)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.loadLocalData(); // Завантаження локальних даних при ініціалізації компонента
  }

  onSubmit() {
    if (this.referenceForm.valid) {
      this.resumeService.postData(this.referenceForm.value).subscribe(response => {
        console.log('Дані успішно відправлені:', response);
        this.loadLocalData(); // Оновлення локальних даних після надсилання
        this.referenceForm.reset(); // Очищення форми після відправки
      });
    }
  }

  loadLocalData() {
    this.localReferences = this.resumeService.getLocalData(); // Отримання локальних даних
  }
}


// export class ReferencesComponent {
//   referenceForm: FormGroup;
//
//   constructor(private fb: FormBuilder, private resumeService: ResumeService) {
//     this.referenceForm = this.fb.group({
//       address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
//       phone: ['', [Validators.required,  Validators.minLength(14), Validators.maxLength(19)]],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }
//
//
//   onSubmit(): void {
//     if (this.referenceForm.valid) {
//       console.log('Sending data:', this.referenceForm.value);
//
//       this.resumeService.postData(this.referenceForm.value).subscribe(
//         response => {
//           console.log('Data sent successfully:', response);
//           alert('Form submitted successfully!'); // Повідомлення користувачу
//           this.referenceForm.reset(); // Очищення форми
//         },
//         error => {
//           console.error('Error sending data:', error);
//           alert('Failed to submit the form.'); // Повідомлення користувачу про помилку
//         }
//       );
//     } else {
//       console.log('Form is invalid!');
//     }
//   }
//
//   // formatPhoneNumber(): void {
//   //   let phoneNumber = this.referenceForm.controls['phone'].value.replace(/\D/g, '');  // Видаляємо всі нецифрові символи
//   //   if (phoneNumber.length == 10) {
//   //     phoneNumber = phoneNumber.replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, '($1) $2 $3 $4'); //  (xxx) xx xx xxx
//   //   } else if (phoneNumber.length == 11) {
//   //     phoneNumber = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1-$2-$3-$4'); //  +1-xxx-xxx-xxxx
//   //   } else if  (phoneNumber.length >=12) {
//   //     phoneNumber = phoneNumber.replace(/(\d{2})(\d{3})(\d{2})(\d{2})(\d{3})/, '+$1 ($2) $3 $4 $5'); //  +38 (xxx) xx xx xxx
//   //   }
//   //   this.referenceForm.controls['phone'].setValue(phoneNumber);  // Оновлюємо значення телефонного номера
//   // }
//
//   // onSubmit(): void {
//   //   if (this.referenceForm.valid) {
//   //     console.log(this.referenceForm.value);
//   //
//   //   }
//   // }
//   // onSubmit(): void {
//   //   if (this.referenceForm.valid) {
//   //     console.log('Form Submitted:', this.referenceForm.value);
//   //
//   //     this.resumeService.postData(this.referenceForm.value).subscribe(
//   //       response => {
//   //         console.log('Data sent successfully', response);
//   //       },
//   //       error => {
//   //         console.error('Error sending data', error);
//   //       }
//   //     );
//   //   } else {
//   //     console.log('Form is invalid!');
//   //   }
//   // }
//   // reference = {
//   //   address: '',
//   //   phone: '',
//   //   email: ''
//   // };
//  // constructor(private resumeService: ResumeService) {}
//   // formatPhoneNumber() {
//   //   let phoneNumber = this.reference.phone.replace(/\D/g, ''); // Видаляємо всі нецифрові символи
//   //   if (phoneNumber.length <= 10) {
//   //     phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Формат +1-xxx-xxx-xxxx
//   //   } else if (phoneNumber.length > 10) {
//   //     phoneNumber = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1-$2-$3-$4'); // Формат +1-xxx-xxx-xxxx
//   //   }
//   //   this.reference.phone = phoneNumber; // Оновлюємо значення телефонного номера в моделі
//   // }
//   // onSubmit(form: any) {
//   //   if (form.valid) {
//   //     console.log('Form Submitted!', this.reference);
//   //     this.resumeService.postData(this.reference).subscribe(
//   //       response => {
//   //         console.log('Data sent successfully', response);
//   //       },
//   //       error => {
//   //         console.log('Error sending data', error);
//   //       }
//   //     );
//   //   } else {
//   //     console.log('Form is invalid!');
//   //   }
//   // }
// }
