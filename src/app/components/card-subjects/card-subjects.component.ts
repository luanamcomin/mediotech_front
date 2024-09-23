import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card-subjects',
  standalone: true,
  imports: [
    MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card-subjects.component.html',
  styleUrl: './card-subjects.component.css'
})
export class CardSubjectsComponent {

}
