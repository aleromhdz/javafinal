import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-participant-input',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './participant-input.component.html',
  styleUrl: './participant-input.component.css'
})

export class ParticipantInputComponent {
  name: string = '';
  lastNameLetter: string = '';
  nickname: string = '';
  participants: { name: string; lastNameLetter: string; nickname: string; } [] = [];

  addParticipant() {
    if (this.name && this.lastNameLetter && this.nickname) {
      this.participants.push({
        name: this.name,
        lastNameLetter: this.lastNameLetter,
        nickname: this.nickname
      });
      this.name = '';
      this.lastNameLetter = '';
      this.nickname = '';
    } else {
      alert('Please fill in all fields!');
    }
  }
  finishList() {
    console.log('Final Participant List:', this.participants);
    alert('Participant list is finalized!');
  }
  }