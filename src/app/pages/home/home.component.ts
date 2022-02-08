import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenModal(){
    this.showModal = true;
  }

  onCloseModal(){
    this.showModal = false
  }

}
