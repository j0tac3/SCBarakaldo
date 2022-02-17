import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactMail } from 'src/app/models/contactMail.model';
import { SendMessageService } from 'src/app/services/send-message.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  public formContact! : FormGroup;

  constructor( private fb : FormBuilder,
                private sendMassageService : SendMessageService ) { }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm() {
    this.formContact = this.fb.group({
      contactMail : ['', Validators.required],
      subject: ['', Validators.required],
      message : ['', Validators.required]
    });
  }

  onSendMail(){
    if (this.formContact.valid ){
      let messageFromUser = new ContactMail(this.formContact.value);
      console.log(messageFromUser);
      this.sendMassageService.sendMessage(messageFromUser)
      .subscribe( resp => {
        console.log('ok');
      }
      );
    }
  }

  onCloseModal(){
    this.closeModal.emit(true);
  }

}
