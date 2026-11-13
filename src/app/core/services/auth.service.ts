import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: string;
  joinDate?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(
    this.getMockUser()
  );
  public currentUser$ = this.currentUserSubject.asObservable();

  private authStateSubject = new BehaviorSubject<boolean>(true);
  public authState$ = this.authStateSubject.asObservable();

  constructor() {}

  isAuthenticated(): boolean {
    return this.authStateSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getCurrentUser$(): Observable<User | null> {
    return this.currentUser$;
  }

  login(email: string, password: string): Observable<User> {
    const mockUser = this.getMockUser();
    this.currentUserSubject.next(mockUser);
    this.authStateSubject.next(true);
    return new Observable(observer => {
      observer.next(mockUser);
      observer.complete();
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.authStateSubject.next(false);
  }

  updateUser(user: User): Observable<User> {
    this.currentUserSubject.next(user);
    return new Observable(observer => {
      observer.next(user);
      observer.complete();
    });
  }

  private getMockUser(): User {
    return {
      id: '1',
      name: 'Marco Di Caro',
      email: 'marco@example.com',
      phone: '+39 111 111 1111',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco',
      role: 'user',
      joinDate: '2024-01-15'
    };
  }
}
