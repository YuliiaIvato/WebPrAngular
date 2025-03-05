import { Component } from '@angular/core';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';


@Component({
  selector: 'app-resume',
  imports: [LeftColumnComponent, RightColumnComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
