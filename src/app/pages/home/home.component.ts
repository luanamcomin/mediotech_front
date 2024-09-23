import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SubjectsComponent } from '../subjects/subjects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    SubjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
