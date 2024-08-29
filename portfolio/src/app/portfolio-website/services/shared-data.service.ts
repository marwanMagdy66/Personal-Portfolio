import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private apiUrl = 'http://localhost:5000/info/getAll';
private apiUrl2='http://localhost:5000/info/get_One_Data'
private updateProjectAPI='http://localhost:5000/info/edit_project'
private updateSkillAPI='http://localhost:5000/info/edit_skill'

  constructor(private http: HttpClient) {}

  // Fetch data from the backend API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getDataById(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl2}/${id}`);
  }

  updateProject(id:any,data:any):Observable<any>{
    return this.http.patch(`${this.updateProjectAPI}/${id}`,data);
  }
  updateSkill(id:any,data:any):Observable<any>{
    return this.http.patch(`${this.updateSkillAPI}/${id}`,data);
  }
}
