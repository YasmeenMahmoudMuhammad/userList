import { Injectable } from '@angular/core';
import { userData } from '../models/user-data/userData.data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : userData[] =[];

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<userData[]> {
    return this.httpClient.get<userData[]>('../../assets/users.json')
  }

}
