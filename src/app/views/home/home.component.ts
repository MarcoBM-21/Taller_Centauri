import { Component } from '@angular/core';
import { ClassifierComponent } from '../classifier/classifier.component';

@Component({
  selector: 'app-home',
  imports: [ClassifierComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
