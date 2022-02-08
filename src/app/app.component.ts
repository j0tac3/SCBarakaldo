import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sc-barakaldo-front';
  public showModal = false;


  onOpenModal(){
    this.showModal = true;
  }

  onCloseModal(){
    this.showModal = false
  }
}
