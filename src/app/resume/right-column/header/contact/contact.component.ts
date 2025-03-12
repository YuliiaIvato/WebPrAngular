import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; //для *ngFor

@Component({
  selector: 'app-contact',
  imports: [CommonModule], //для *ngFor
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  //contactNumbers: string[] = ['+1-718-310-5588', '+1-313-381-8167'];
  isVisible = true;

  @Input() phoneNumbers!: string[];
  @Input() website!: string;
  @Input() email!: string;
  @Input() address!: string;
}


