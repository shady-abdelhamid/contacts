import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  /**
   * getter for users observable
   */
  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  /**
   * load users data from endpoint into data store
   */
  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
        this._users.next(Object.assign([], this.dataStore.users));
      }, error => {
        console.log('Failed to fetch users');
      });

  }

  /**
   * get user by user id
   * @param id userId
   */
  getUserById(id: any): User {
    return this.dataStore.users.find(u => u.id == id);
  }
}
