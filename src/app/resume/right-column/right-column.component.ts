import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-right-column',
  imports: [HeaderComponent, MainComponent],
  standalone: true,
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent {
}
