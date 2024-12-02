import { Component, EventEmitter, Output, } from '@angular/core';
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
  @Output() listFinalized = new EventEmitter<
   { name: string; lastNameLetter: string; nickname: string }[]
   >();

  name: string = '';
  lastNameLetter: string = '';
  nickname: string = '';
  participants: { name: string; lastNameLetter: string; nickname: string; } [] = [];
  duplicateParticipantError: boolean = false;

  addParticipant() {
    if (this.name && this.lastNameLetter && this.nickname) {
      const isDuplicate = this.participants.some(
        (participant) =>
          participant.name === this.name &&
          participant.lastNameLetter === this.lastNameLetter &&
          participant.nickname === this.nickname
      );
      if (isDuplicate) {
        this.duplicateParticipantError = true;
      } else {
        this.participants.push({
          name: this.name,
          lastNameLetter: this.lastNameLetter,
          nickname: this.nickname
        });

        this.name ='';
        this.lastNameLetter = '';
        this.nickname = '';
        this.duplicateParticipantError = false;
      }
    } else {
      alert('Please fill in all fields!')
    }
  }

  removeParticipant(index: number) {
    this.participants.splice(index, 1)
   }
  finishList() {
    this.listFinalized.emit(this.participants);
  }
}