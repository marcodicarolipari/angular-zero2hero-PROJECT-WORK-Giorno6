import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="maintenance-container">
      <div class="maintenance-content">
        <div class="icon">🔧</div>
        <h1>Manutenzione in corso</h1>
        <p class="message">{{ message }}</p>
        <p class="info">Torneremo online al più presto</p>
      </div>
    </div>
  `,
  styles: [`
    .maintenance-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .maintenance-content {
      text-align: center;
      background: white;
      padding: 3rem 2rem;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 500px;
    }

    .icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    h1 {
      margin: 0 0 1rem 0;
      color: #333;
      font-size: 2rem;
    }

    .message {
      color: #666;
      font-size: 1.1rem;
      margin: 0 0 1.5rem 0;
    }

    .info {
      color: #999;
      font-size: 0.95rem;
      margin: 0;
    }
  `]
})
export class MaintenanceComponent implements OnInit {
  message: string = 'Il sistema è attualmente in manutenzione. Riprova più tardi.';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['message']) {
        this.message = params['message'];
      }
    });
  }
}
