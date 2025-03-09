import { Component } from '@angular/core';
import {EducationComponent} from './education/education.component';
import {JobComponent} from './job/job.component';
import {ReferencesComponent} from './references/references.component';

@Component({
  selector: 'app-main',
  imports: [EducationComponent, ReferencesComponent ,JobComponent],
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
