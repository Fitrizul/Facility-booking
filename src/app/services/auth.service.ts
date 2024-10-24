import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model'; // Import your model

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private adminsUrl = 'api/admins';
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  login(username: string, password: string, type: 'admin' | 'user'): Observable<boolean> {
    const url = type === 'admin' ? this.adminsUrl : this.usersUrl;
    return this.http.get<User[]>(url).pipe( 
      map(users => {
        const user = users.find(user => user.username === username && user.password === password);
        return !!user;  
      })
    );
  }
}

