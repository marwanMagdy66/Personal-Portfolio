import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateInfoService {
  private apiUrl = 'http://localhost:5000/info/Project&Skill'; // Ensure this URL is correct

  constructor(private http: HttpClient) {}

  updateInfo(formData: FormData,token:any): Observable<any> {
    return this.http.post(this.apiUrl, formData, { headers: { 'token': 'maro__'
      + token } });

  }
}
