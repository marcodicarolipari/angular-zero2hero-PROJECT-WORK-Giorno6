import { CanDeactivateFn } from '@angular/router';

export interface UnsavedChangesComponent {
  hasUnsavedChanges(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<UnsavedChangesComponent> =
  (component) => {
    return !component.hasUnsavedChanges() ||
      window.confirm('Hai modifiche non salvate. Vuoi uscire senza salvarle?');
  };
