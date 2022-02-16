import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  public formContact! : FormGroup;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm() {
    this.formContact = this.fb.group({
      email : ['', Validators.required],
      message : ['', Validators.required]
    });
  }

  onCloseModal(){
    this.closeModal.emit(true);
  }

}
