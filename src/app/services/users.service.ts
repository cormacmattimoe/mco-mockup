
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { USERS } from './mock-data';

@Injectable()
export class UsersService {

  constructor() { }

  getUsers(): Observable<any[]>{
    return Observable.of(USERS).delay(100);
  }

  getRows(): string[]{
    return ["name", "accountNumber", "country", "dateJoined"]
    
  }

}