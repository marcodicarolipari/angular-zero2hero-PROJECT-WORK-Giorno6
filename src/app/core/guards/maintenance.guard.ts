import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MaintenanceService } from '../services/maintenance.service';

export const maintenanceGuard = () => {
  const maintenanceService = inject(MaintenanceService);
  const router = inject(Router);

  if (maintenanceService.isMaintenanceMode()) {
    const message = maintenanceService.getMaintenanceMessage();
    return router.createUrlTree(['/maintenance'], {
      queryParams: { message },
    });
  }

  return true;
};
