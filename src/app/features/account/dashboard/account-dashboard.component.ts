// app/features/account/dashboard/account-dashboard.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-account-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      @if (accountData) {
        <div class="account-card">
          <h2>{{ accountData.name }}</h2>
          <p>Saldo: {{ accountData.balance }} {{ accountData.currency }}</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
    }
    .account-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class AccountDashboardComponent {
  // withComponentInputBinding (configurato in app.config.ts) permette di
  // ricevere i dati del resolver direttamente come @Input
  // Il nome dell'input deve corrispondere alla chiave nel resolve: { accountData: ... }
  @Input() accountData!: Account;
  // Nota: non serve più iniettare ActivatedRoute e fare subscribe()
  // Angular passa automaticamente i dati risolti come input
}

