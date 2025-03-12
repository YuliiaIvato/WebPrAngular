import { Component } from '@angular/core';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-header',
  imports: [ContactComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  contact = {
    phoneNumbers: ['+1-718-310-5588', '+1-313-381-8167'],
    website: 'www.yourwebsite.com',
    email: 'yourinfo@email.com',
    address: '769 Prudence Street' //, Lincoln Park, MI 48146'
  };
}
