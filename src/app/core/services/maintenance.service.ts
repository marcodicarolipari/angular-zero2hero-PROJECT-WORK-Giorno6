import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private maintenanceModeSubject = new BehaviorSubject<boolean>(false);
  public isMaintenanceMode$ = this.maintenanceModeSubject.asObservable();

  private maintenanceMessageSubject = new BehaviorSubject<string>(
    'Il sistema è attualmente in manutenzione. Riprova più tardi.'
  );
  public maintenanceMessage$ = this.maintenanceMessageSubject.asObservable();

  constructor() {}

  isMaintenanceMode(): boolean {
    return this.maintenanceModeSubject.value;
  }

  setMaintenanceMode(enabled: boolean): void {
    this.maintenanceModeSubject.next(enabled);
  }

  setMaintenanceMessage(message: string): void {
    this.maintenanceMessageSubject.next(message);
  }

  getMaintenanceMessage(): string {
    return this.maintenanceMessageSubject.value;
  }
}
