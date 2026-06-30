import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
})
export class LoginPage {
  private readonly document = inject(DOCUMENT);

  @Output() login = new EventEmitter<LoginCredentials>();
  @Output() forgotPassword = new EventEmitter<void>();

  username = '';
  password = '';
  isDarkMode = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  onLogin(): void {
    this.login.emit({ username: this.username, password: this.password });
  }
}
