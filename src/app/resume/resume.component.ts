import { Component } from '@angular/core';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [LeftColumnComponent, RightColumnComponent, CommonModule],
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent {
}
