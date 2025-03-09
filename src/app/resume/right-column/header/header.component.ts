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

}
