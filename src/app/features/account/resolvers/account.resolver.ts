// app/features/account/resolvers/account.resolver.ts
import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';

// ResolveFn<T>: tipo del Resolver funzionale
// T è il tipo del dato che il resolver restituisce
// ActivatedRouteSnapshot: contiene i parametri della route (es. :id)
export const accountResolver: ResolveFn<Account> = (route) => {
  const accountService = inject(AccountService);
  const router = inject(Router);

  // Otteniamo l'accountId dai parametri della route (es. /dashboard/:accountId)
  // Se non c'è un parametro id, usiamo 'current' come default
  const accountId = route.paramMap.get('accountId') ?? 'current';

  return accountService.getAccountById(accountId).pipe(
    catchError((err) => {
      // Se l'API fallisce, reindiriziamo alla login page
      // EMPTY: Observable che completa immediatamente senza emettere valori
      // Il Resolver non blocca la navigazione ma non passa dati
      console.error('Account resolver failed:', err);
      router.navigate(['/login']);
      return EMPTY;
    }),
  );
};
