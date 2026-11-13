import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin area</p>
    </div>
  `,
  styles: [`
    .admin-dashboard {
      padding: 2rem;
    }
  `]
})
export class AdminDashboardComponent {}
