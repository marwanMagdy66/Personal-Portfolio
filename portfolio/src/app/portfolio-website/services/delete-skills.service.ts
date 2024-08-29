import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteSkillsService {
  apiUrl = 'http://localhost:5000/info/delete_skill'; // Corrected URL

  constructor(private http: HttpClient) { }

  deleteSkill(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
