import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @Output() openModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenModal(){
    this.openModal.emit(true);
  }

}
