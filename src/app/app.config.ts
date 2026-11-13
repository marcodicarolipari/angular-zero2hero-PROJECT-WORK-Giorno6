// app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { SelectivePreloadingStrategy } from './core/strategies/selective-preloading.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // withComponentInputBinding: abilita il binding automatico di params/resolver
      // come @Input() nei componenti delle route
      withComponentInputBinding(),
      // withPreloading: configura la strategia di preloading
      // SelectivePreloadingStrategy: pre-carica solo le route con data.preload = true
      withPreloading(SelectivePreloadingStrategy)
    ),
  ],
};