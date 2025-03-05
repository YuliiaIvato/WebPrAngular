import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-left-column',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './left-column.component.html',
  styleUrl: './left-column.component.scss'
})
export class LeftColumnComponent {

}
