import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  startSecretSanta(){
  // Logic for starting Secret Santa (e.g., navitating to another page or showing the participants screen)
  console.log( 'Secret Santa Started!');
  }

}