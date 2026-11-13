import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="transactions-container">
      <h2>Movimenti</h2>
      <p>Lista dei tuoi movimenti</p>
    </div>
  `,
  styles: [`
    .transactions-container {
      padding: 2rem;
    }
  `]
})
export class TransactionsComponent {}
