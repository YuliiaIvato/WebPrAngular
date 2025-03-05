import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-right-column',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './right-column.component.html',
  styleUrl: './right-column.component.scss'
})
export class RightColumnComponent {

}
