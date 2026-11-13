// app/core/strategies/selective-preloading.strategy.ts
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  // preload viene chiamato da Angular per ogni route lazy
  // Se restituisce un Observable che emette un valore, Angular pre-carica quella route
  // Se restituisce of(null), Angular NON pre-carica
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    // Controlliamo il flag custom data.preload nella definizione della route
    if (route.data?.['preload'] === true) {
      console.log(`Pre-caricamento route: ${route.path}`);
      // load() avvia il download lazy della route in background
      return load();
    }
    // of(null): Angular non pre-carica questa route
    return of(null);
  }
}