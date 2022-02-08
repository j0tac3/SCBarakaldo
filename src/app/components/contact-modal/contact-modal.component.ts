import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseModal(){
    this.closeModal.emit(true);
  }

}
