import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  styleUrl: './login-page.css',
})
export class LoginPage {
  @Input() imageSrc = 'assets/Cabelefant.avif';
  @Input() imageAlt = 'Ivory';

  @Output() login = new EventEmitter<LoginCredentials>();
  @Output() forgotPassword = new EventEmitter<void>();

  username = '';
  password = '';
  mostrarSenha = false;
  ano = new Date().getFullYear();

  onLogin(): void {
    this.login.emit({ username: this.username, password: this.password });
  }
}
