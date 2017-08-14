import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Gender, Player } from '../players-list/players';
import { PlayersService } from '../players-list/players.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  name = new FormControl();
  lastname = new FormControl();
  jerseyNumber = new FormControl();
  gender = new FormControl();
  closeResult: string;
  private modalRef: NgbModalRef;


  constructor(private modalService: NgbModal, private playersService: PlayersService) {
  }

  ngOnInit() {
  }

  open(content) {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, () => {
      this.closeResult = 'Dismissed';
    });
  }


  addPlayer() {
    const gender = this.gender.value === 1 ? Gender.man : Gender.woman;
    const newPlayer: Player = {
      name: this.name.value,
      lastname: this.lastname.value,
      jerseyNumber: this.jerseyNumber.value,
      gender: gender
    };
    this.playersService.addPlayer(newPlayer);
    this.modalRef.close();
  }
}
