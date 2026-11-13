// app/core/guards/role.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Guard parametrizzata: restituisce una functional guard
// Questo pattern — una funzione che restituisce una funzione —
// ci permette di riutilizzare la stessa logica con ruoli diversi
// Es: roleGuard('admin'), roleGuard('manager')
export const roleGuard = (requiredRole: string) => () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getCurrentUser();

  if (!user) {
    // Utente non autenticato: manda al login
    return router.createUrlTree(['/login']);
  }

  if (user.role === requiredRole) {
    // Ruolo corretto: accesso consentito
    return true;
  }

  // Ruolo errato: reindirizza alla dashboard standard
  // Non mostriamo un errore 403 esplicito per non rivelare
  // l'esistenza della route admin (security best practice)
  return router.createUrlTree(['/dashboard']);
};
