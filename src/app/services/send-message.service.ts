import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ContactMail } from '../models/contactMail.model';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
  private basePath = 'http://127.0.0.1:8000/api/sendContactMail';

  constructor( private http : HttpClient) { }

  sendMessage( contactMessage : ContactMail ) : Observable<ContactMail>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(contactMessage);
    return this.http.post( this.basePath, body, {'headers': headers});
    /* .pipe(map((response: any) => response.json())); */
  }
}
