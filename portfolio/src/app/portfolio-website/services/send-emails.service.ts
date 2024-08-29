import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailsService {
  private apiURL='http://localhost:5000/user/email';

  constructor(private http:HttpClient){ }
  sendEmail( email: string, message: string) :Observable<any> {
    const data = {

      email: email,
      newMessage: message
    };
    return this.http.post(this.apiURL, data);
  }


}
