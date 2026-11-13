// app/features/account/account.routes.ts
import { Routes } from '@angular/router';
import { accountResolver } from './resolvers/account.resolver';

// Array di route per la feature "Account"
// Questo file viene scaricato lazily quando si naviga su /dashboard
export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    // Resolver: pre-carica i dati del conto PRIMA che il componente venga montato
    // L'utente non vede una schermata bianca: il componente si monta già con i dati
    resolve: { accountData: accountResolver },
    loadComponent: () =>
      import('./dashboard/account-dashboard.component').then(
        (c) => c.AccountDashboardComponent,
      ),
  },
  {
    path: 'movimenti',
    loadComponent: () =>
      import('./transactions/transactions.component').then(
        (c) => c.TransactionsComponent,
      ),
    // data: metadati custom della route
    // Qui usiamo preload: true per la PreloadingStrategy custom
    data: { preload: true, breadcrumb: 'Movimenti' },
  },
  {
    path: 'investimenti',
    loadComponent: () =>
      import('./investments/investments.component').then(
        (c) => c.InvestmentsComponent,
      ),
    data: { preload: false, breadcrumb: 'Investimenti' },
  },
];
