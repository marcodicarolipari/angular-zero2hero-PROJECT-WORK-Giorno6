import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor() {}

  getAccountById(accountId: string): Observable<Account> {
    const mockAccount: Account = {
      id: accountId,
      name: 'My Account',
      balance: 5000,
      currency: 'EUR'
    };
    return of(mockAccount);
  }
}
