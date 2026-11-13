import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="investments-container">
      <h2>Investimenti</h2>
      <p>I tuoi investimenti</p>
    </div>
  `,
  styles: [`
    .investments-container {
      padding: 2rem;
    }
  `]
})
export class InvestmentsComponent {}
