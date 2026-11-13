// app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { maintenanceGuard } from './core/guards/maintenance.guard';
import { accountResolver } from './features/account/resolvers/account.resolver';

export const routes: Routes = [
  // ── AREA PUBBLICA ────────────────────────────────────────────────────────
  {
    path: '',
    // loadComponent: carica standalone component in modo lazy
    // Il bundle di LoginComponent viene scaricato solo al primo accesso
    loadComponent: () =>
      import('./features/auth/login/login.component')
        .then(c => c.LoginComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component')
        .then(c => c.LoginComponent),
  },

  // ── AREA CLIENTI (autenticazione richiesta) ──────────────────────────────
  {
    path: 'dashboard',
    // canActivate: array di functional guards
    // Tutti devono restituire true per accedere alla route
    canActivate: [maintenanceGuard, authGuard],
    // loadChildren: carica un intero array di route lazy
    // Permette di raggruppare le sub-route della feature
    loadChildren: () =>
      import('./features/account/account.routes')
        .then(r => r.ACCOUNT_ROUTES),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    // loadComponent: carica il componente standalone in modo lazy
    // Il bundle del componente viene scaricato solo al primo accesso
    loadComponent: () =>
      import('./features/profile/user-profile/user-profile.component')
        .then(c => c.UserProfileComponent),
  },

  // ── AREA ADMIN (autenticazione + ruolo admin richiesti) ──────────────────
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard('admin')],
    // canActivateChild: si applica a TUTTE le route figlie
    // Garantisce che ogni sub-route dell'area admin sia protetta
    canActivateChild: [roleGuard('admin')],
    loadChildren: () =>
      import('./features/admin/admin.routes')
        .then(r => r.ADMIN_ROUTES),
  },

  // ── PAGINA MANUTENZIONE ───────────────────────────────────────────────────
  {
    path: 'maintenance',
    loadComponent: () =>
      import('./shared/components/maintenance/maintenance.component')
        .then(c => c.MaintenanceComponent),
  },

  // ── CATCH-ALL ─────────────────────────────────────────────────────────────
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component')
        .then(c => c.NotFoundComponent),
  },
];