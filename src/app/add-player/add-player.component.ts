import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Gender } from '../players-list/players';
import { PlayersService } from '../players-list/players.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    jerseyNumber: new FormControl(),
    gender: new FormControl()
  });

  closeResult: string;
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal, private playersService: PlayersService) {
  }

  ngOnInit() {
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
      gender: (this.playerForm.value.gender === '1' ? Gender.man : Gender.woman)
    };
  }
}
