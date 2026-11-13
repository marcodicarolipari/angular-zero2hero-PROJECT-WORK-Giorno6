// app/core/guards/auth.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Functional guard: una semplice funzione Arrow
// inject() funziona perché viene chiamata in un contesto di injection
// (Angular la esegue nell'injection context durante la navigazione)
export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    // true: la navigazione prosegue normalmente
    return true;
  }

  // UrlTree: reindirizza l'utente alla login page
  // queryParams: salviamo la URL di destinazione originale
  // così dopo il login possiamo reindirizzare dove l'utente voleva andare
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: router.url },
  });
};
