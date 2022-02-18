import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public contactMessage = new ContactMail(['','','']);
  private emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor( private fb : FormBuilder,
                private sendMassageService : SendMessageService ) { }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm() {
    this.formContact = new FormGroup({
      contactMail : new FormControl(this.contactMessage.contactMail, [
          Validators.required, 
          Validators.email,
          Validators.pattern(this.emailPattern)
        ]),
      subject: new FormControl(this.contactMessage.subject, [Validators.required]),
      message : new FormControl(this.contactMessage.subject, [Validators.required])
    });
  }

  get contactMail() { return this.formContact.get('contactMail'); }
  get subject() { return this.formContact.get('subject'); }
  get message() { return this.formContact.get('message'); }

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
