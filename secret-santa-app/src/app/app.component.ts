import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { ParticipantInputComponent } from './participant-input/participant-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingComponent, ParticipantInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secret-santa-app';
}
