import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface LoginCredentials {
  username: string;
  password: string;
}

@Component({
  selector: 'lib-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css', './dark-theme.css'],
  host: {
    '[class.dark-theme]': 'isDarkMode',
  },
})
export class LoginPage {
  @Output() login = new EventEmitter<LoginCredentials>();
  @Output() forgotPassword = new EventEmitter<void>();

  username = '';
  password = '';
  isDarkMode = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  onLogin(): void {
    this.login.emit({ username: this.username, password: this.password });
  }
}
