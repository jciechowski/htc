import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Gender } from '../shared/models/players';
import { PlayersService } from '../players-list/players.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  private modalRef: NgbModalRef;
  private playerForm: FormGroup;
  private name: AbstractControl;
  private lastname: AbstractControl;
  private jerseyNumber: AbstractControl;
  private gender: AbstractControl;
  private jerseyValues: Set<number>;

  constructor(
    private modalService: NgbModal,
    private playersService: PlayersService,
    private builder: FormBuilder
  ) {
    this.playerForm = this.builder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      jerseyNumber: ['', []],
      gender: ['', Validators.required]
    });
    this.name = this.playerForm.controls['name'];
    this.lastname = this.playerForm.controls['lastname'];
    this.gender = this.playerForm.controls['gender'];
    this.jerseyValues = this.playersService.getAvailableNumbers;
  }

  open(content) {
    this.modalRef = this.modalService.open(content);
  }

  addPlayer() {
    const newPlayer = this.getPlayerFormValue();
    this.playersService.addPlayer(newPlayer);
    this.modalRef.close();
    this.playerForm.reset();
  }

  private getPlayerFormValue() {
    return {
      name: this.playerForm.value.name,
      lastname: this.playerForm.value.lastname,
      jerseyNumber: this.playerForm.value.jerseyNumber,
      gender: this.playerForm.value.gender === '1' ? Gender.man : Gender.woman
    };
  }
}
